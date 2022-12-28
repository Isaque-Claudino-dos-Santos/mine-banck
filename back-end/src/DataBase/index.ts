import MysqlQueryString from 'mysql-qs-creator'
import mysql2, { Connection } from 'mysql2/promise'
import { env } from 'process'
import Migration from './Migration'

export default class DataBase {
  private readonly queryCreator = new MysqlQueryString()
  readonly connection: Promise<Connection>

  constructor() {
    this.connection = mysql2.createConnection({
      database: env.DB_DBNAME,
      host: env.DB_HOST,
      port: Number(env.DB_PORT),
      user: env.DB_USER,
      password: env.DB_PASS,
    })
  }

  private async useDataBase() {
    this.connection.then(({ execute }) => {
      const query = this.queryCreator.database.use(env.DB_DBNAME)
      execute(query)
    })
  }

  private async migrationsUp(migrations: Migration[]) {
    this.connection.then(({ execute }) => {
      migrations.forEach((migration) => {
        const methodCreate = this.queryCreator.table.create
        execute(migration.up(methodCreate))
      })
    })
  }

  private async migrationsDown(migrations: Migration[]) {
    this.connection.then(({ execute }) => {
      migrations.forEach((migration) => {
        const methodDrop = this.queryCreator.table.drop
        execute(migration.down(methodDrop))
      })
    })
  }

  async migrate(migrations: Migration[]) {
    await this.useDataBase()
    await this.migrationsUp(migrations)
    await this.migrationsDown(migrations)
    await this.connection.then(({ end }) => end())
  }
}
