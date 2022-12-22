import 'dotenv/config'
import { dataBaseConfig, serverConfig } from './config'

import DB from './DB'
import Server from './server'

import router from './router'

const db = new DB(dataBaseConfig)
const server = new Server(serverConfig.port, serverConfig.host, router)
