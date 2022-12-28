import MysqlQueryString from 'mysql-qs-creator'
import mysql2, { Connection, Pool } from 'mysql2/promise'
import { env } from 'process'
import Migration from './Migration'

export default class DataBase {
  private readonly queryCreator = new MysqlQueryString()
  readonly connection: Pool

  constructor() {
    this.connection = mysql2.createPool({
      database: env.DB_DBNAME,
      host: env.DB_HOST,
      port: Number(env.DB_PORT),
      user: env.DB_USER,
      password: env.DB_PASS,
    })
  }

  private async useDataBase() {
    const query = this.queryCreator.database.use(env.DB_DBNAME)
    this.connection.execute(query)
  }

  private async migrationsUp(migrations: Migration[]) {
    migrations.forEach((migration) => {
      const methodCreate = this.queryCreator.table.create
      this.connection.execute(migration.up(methodCreate))
    })
  }

  private async migrationsDown(migrations: Migration[]) {
    migrations.forEach((migration) => {
      const methodDrop = this.queryCreator.table.drop
      this.connection.execute(migration.down(methodDrop))
    })
  }

  async migrate(migrations: Migration[]) {
    await this.useDataBase()
    await this.migrationsUp(migrations)
    await this.migrationsDown(migrations)
  }
}
