import mysql2 from 'mysql2'
import { env } from 'process'

const dataBaseConfig: mysql2.ConnectionOptions = {
  host: env.DB_HOST,
  port: Number(env.DB_PORT),
  database: env.DB_DBNAME,
  user: env.DB_USER,
  password: env.DB_PASS,
}

export default dataBaseConfig
