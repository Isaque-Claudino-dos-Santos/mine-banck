import { Request, Response } from 'express';
import Client from '../DataBase/Models/Client';

export default class HomeController {
  public async index(req: Request, res: Response): Promise<void> {}
  public async store(req: Request, res: Response): Promise<void> {
    const client = new Client(req.body);

    // client.save() -> save in table

    res.send(client);
  }
}
