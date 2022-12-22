import 'dotenv/config'
import { dataBaseConfig, serverConfig } from './config'
import DB from './DB'
import Server from './Server'
import router from './router'
//Migrations
import ClientsMigration from './Migrations/ClientsMigration'

const db = new DB(dataBaseConfig)
db.migrations = [ClientsMigration]

const server = new Server(serverConfig.port, serverConfig.host, router)
