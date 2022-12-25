import Migration from './Migration'
import { Connection } from 'mysql2'
import QueryMysql from '../QueryMysql/index'

export default class MigrationHandler {
  private query = new QueryMysql()

  constructor(
    private connection: Connection,
    private migrations: Migration[]
  ) {}

  private tableExists(
    table: string,
    callback: (resute: boolean) => void
  ): void {
    const { database } = this.connection.config
    const query = this.query.table.exist(database ?? '', table).build()

    this.connection.query(query, (err, res: []) => {
      if (res.length > 0) callback(true)
      else callback(false)
    })
  }

  private assoc(): void {
    this.migrations.forEach((migration) => {
      migration.associates().forEach((queryString) => {
        this.connection.query(queryString)
      })
    })
  }

  public upAll(): void {
    this.migrations.forEach((m) => {
      this.tableExists(m.name, (exist) => {
        if (!exist) this.connection.query(m.up())
      })
    })

    this.assoc()
  }

  public downAll(): void {
    this.migrations.forEach((m) => {
      this.tableExists(m.name, (exist) => {
        if (!exist) return
        this.connection.query('SET foreign_key_checks = 0', (err) => {
          if (err) throw console.log(err)
          this.connection.query(m.down(), () => {
            this.connection.query('SET foreign_key_checks = 1')
          })
        })
      })
    })
  }
}
