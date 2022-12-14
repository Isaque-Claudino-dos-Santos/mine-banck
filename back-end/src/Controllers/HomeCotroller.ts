import { Request, Response } from 'express';
import Client from '../DataBase/Models/Client';

export default class HomeController {
  public async index(req: Request, res: Response): Promise<void> {
    const client = new Client({
      name: 'isaque',
      surname: 'santos',
      nickname: 'isaqueMyAccess',
      email: 'isaqueclaudino12@gmail.com',
      password: '123',
    });

    res.send(client);
  }
}
