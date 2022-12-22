import mysql2, { Connection, ConnectionOptions } from 'mysql2'

export default class ConnectionDB {
  constructor(private readonly options: ConnectionOptions) {}

  onConnect(): Connection {
    return mysql2.createConnection(this.options)
  }
}
