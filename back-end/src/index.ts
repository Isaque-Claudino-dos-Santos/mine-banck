import 'dotenv/config'
import DB from './DB'
import { dataBaseConfig } from './config'

const db = new DB(dataBaseConfig)
db.connection.then()
