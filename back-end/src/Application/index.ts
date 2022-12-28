import Server from '../Server'
import DataBase from '../DataBase'

const server = new Server()
const database = new DataBase()

export default class Application {
  constructor() {
    console.clear()
  }

  async bootServer() {
    await server.uses()
    await server.listen()
  }
}
