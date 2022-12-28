import mysql2 from 'mysql2/promise'
import { env } from 'process'

export default class DataBase {
  readonly connection = mysql2.createConnection({
    database: env.DB_DBNAME,
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    user: env.DB_USER,
    password: env.DB_PASS,
  })
}
