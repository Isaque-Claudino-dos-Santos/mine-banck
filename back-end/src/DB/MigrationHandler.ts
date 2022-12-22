import Migration from './Migration'
import { Connection } from 'mysql2'

export default class MigrationHandler {
  constructor(
    private connection: Connection,
    private migrations: Migration[]
  ) {}

  private tableExist(
    tableName: string,
    callback: (exists: boolean) => void
  ): void {
    const { database } = this.connection.config
    this.connection.query(
      `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '${database}' AND TABLE_NAME = '${tableName}'`,
      (err, res: []) => {
        if (err) throw console.log(err)

        callback(res.length > 0)
      }
    )
  }

  upAll(): void {
    this.migrations.forEach((m) => {
      this.tableExist('clients', (exist) => {
        if (!exist) this.connection.query(m.up())
      })
    })
  }

  downAll(): void {
    this.migrations.forEach((m) => this.connection.query(m.down()))
  }
}
