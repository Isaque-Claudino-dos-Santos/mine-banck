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
    callback: (exists: boolean) => void
  ): void {
    const { database } = this.connection.config
    const query = this.query.table.exist(database ?? '', table).build()
    this.connection.query(query, (err, res: []) => {
      callback(res.length > 0)
    })
  }

  public upAll(): void {
    this.migrations.forEach((m) => {
      this.tableExists(m.name, (exist) => {
        if (!exist) this.connection.query(m.up())
      })
    })
  }

  public downAll(): void {
    this.migrations.forEach((m) => {
      this.tableExists(m.name, (exist) => {
        this.connection.query('SET foreign_key_checks = 0')
        if (exist) this.connection.query(m.down())
        this.connection.query('SET foreign_key_checks = 1')
      })
    })
  }
}
