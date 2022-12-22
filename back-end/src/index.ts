import 'dotenv/config'
import { dataBaseConfig, serverConfig } from './config'
import DB from './DB'
import Server from './Server'
import router from './router'
//Migrations
import ClientsMigration from './Migrations/ClientsMigration'
import AccountMigration from './Migrations/AccountsMigration'

const db = new DB(dataBaseConfig, [
  new ClientsMigration(),
  new AccountMigration(),
])

const server = new Server(serverConfig.port, serverConfig.host, router)

// db.migration.upAll()
// db.migration.downAll()
