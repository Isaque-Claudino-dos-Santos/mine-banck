import 'dotenv/config'
import Application from './Application'
import ClientMigration from './Migrations/ClientsMigration'

const application = new Application()

application.bootServer()

application.database.migrate([new ClientMigration()])
