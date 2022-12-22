import { env } from 'process'

const serverConfig = {
  port: Number(env.APP_PORT),
  host: env.APP_HOST,
}

export default serverConfig
