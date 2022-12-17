import { Request, Response } from 'express';
import Account from '../DataBase/Models/Account';
import Client from '../DataBase/Models/Client';

export default class AccountController {
  async index(req: Request, res: Response): Promise<void> {
    const clientID = req.params.client_id;
    const account = await Account.findByPk(clientID);

    if (!account) throw res.send(`Client ${clientID} not exist`);

    res.send(account);
  }

  async store(req: Request, res: Response): Promise<void> {
    const clientID = req.params.client_id;

    const client = await Client.findByPk(clientID);

    if (!client) throw res.send(`Client id ${clientID} not exist`);
    const account = new Account({ client: clientID });

    try {
      await account.save();
      res.send(account);
    } catch (err) {
      res.send(err);
    }
  }
}
