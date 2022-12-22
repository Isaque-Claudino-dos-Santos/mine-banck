import mysql2 from 'mysql2'

export default class ConnectionDB {
  constructor(private readonly options: mysql2.ConnectionOptions) {}

  async onConnect(): Promise<mysql2.Connection> {
    return mysql2.createConnection(this.options)
  }
}
