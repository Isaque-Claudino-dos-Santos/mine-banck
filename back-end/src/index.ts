import 'dotenv/config'

import DB from './DB'
import Server from './server'

import { dataBaseConfig, serverConfig } from './config'

import router from './router'

const db = new DB(dataBaseConfig)
const server = new Server(serverConfig.port, serverConfig.host, router)
