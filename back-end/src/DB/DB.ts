import ConnectionDB from './ConnectionDB'
import { Connection, ConnectionOptions } from 'mysql2'

export default class DB {
  private readonly connectionDB: ConnectionDB
  public readonly connection: Connection

  constructor(connectionOptions: ConnectionOptions) {
    this.connectionDB = new ConnectionDB(connectionOptions)
    this.connection = this.connectionDB.onConnect()
  }
}
