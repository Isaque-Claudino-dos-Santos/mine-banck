import { Request, Response } from 'express';
import Client from '../DataBase/Models/Client';

export default class ClientController {
  public async index(req: Request, res: Response): Promise<void> {
    const clients = await Client.findAll();

    res.send(clients);
  }

  public async store(req: Request, res: Response): Promise<void> {
    const client = new Client(req.body);

    try {
      await client.save();
      res.send(client);
    } catch (err) {
      res.send(err);
    }
  }
}
