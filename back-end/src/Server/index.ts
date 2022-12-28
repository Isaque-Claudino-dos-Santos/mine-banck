import express, { Application } from 'express'
import { env } from 'process'
import router from '../router'

export default class Server {
  public readonly app = express()

  async uses() {
    this.app.use(express.json())
    this.app.use(express.urlencoded())
    this.app.use(router)
  }

  async listen() {
    this.app.listen(Number(env.APP_PORT), env.APP_HOST, () =>
      console.log(`Open serve in http://${env.APP_HOST}:${env.APP_PORT}`)
    )
  }
}
