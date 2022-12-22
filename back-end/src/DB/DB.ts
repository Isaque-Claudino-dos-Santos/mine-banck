import ConnectionDB from './ConnectionDB'
import { Connection, ConnectionOptions } from 'mysql2'
import Migration from './Migration'
import MigrationHandler from './MigrationHandler'

export default class DB {
  public readonly connection: Connection
  public readonly migration: MigrationHandler

  constructor(
    connectionOptions: ConnectionOptions,
    private migrationsInstances: Migration[] = []
  ) {
    this.connection = new ConnectionDB(connectionOptions).onConnect()
    this.migration = new MigrationHandler(
      this.connection,
      this.migrationsInstances
    )
  }
}
