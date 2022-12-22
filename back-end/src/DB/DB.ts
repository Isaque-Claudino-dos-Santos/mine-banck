import ConnectionDB from './ConnectionDB'
import { Connection, ConnectionOptions } from 'mysql2'
import Migration from './Migration'

export default class DB {
  private readonly connectionDB: ConnectionDB

  public readonly connection: Connection
  public migrations: typeof Migration[] = []

  constructor(connectionOptions: ConnectionOptions) {
    this.connectionDB = new ConnectionDB(connectionOptions)
    this.connection = this.connectionDB.onConnect()
  }
}
