import express, { Router } from 'express'

export default class Server {
  private readonly app = express()

  constructor(
    private readonly port: number,
    private readonly host: string = 'localhost',
    private readonly router: Router | undefined = undefined
  ) {
    this.uses()
    this.listen()
  }

  private aplicateRouter(): void {
    if (this.router) this.app.use(this.router)
  }

  private uses(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.aplicateRouter()
  }

  private listen(): void {
    this.app.listen(this.port, this.host, () =>
      console.log(`Open serve in http://${this.host}:${this.port}`)
    )
  }
}
