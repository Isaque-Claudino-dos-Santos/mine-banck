import ConnectionDB from './ConnectionDB'
import { ConnectionOptions } from 'mysql2'

export default class DB {
  public readonly connectionDB: ConnectionDB

  constructor(connectionOptions: ConnectionOptions) {
    this.connectionDB = new ConnectionDB(connectionOptions)
  }
}
