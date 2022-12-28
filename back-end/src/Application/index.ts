import Server from '../Server'
import DataBase from '../DataBase'

export default class Application {
  private readonly server = new Server()
  readonly database = new DataBase()

  constructor() {
    console.clear()
  }

  async bootServer() {
    await this.server.uses()
    await this.server.listen()
  }
}
