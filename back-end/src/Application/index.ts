import Server from '../Server'

const server = new Server()

export default class Application {
  constructor() {
    console.clear()
  }

  async bootServer() {
    await server.uses()
    await server.listen()
  }
}
