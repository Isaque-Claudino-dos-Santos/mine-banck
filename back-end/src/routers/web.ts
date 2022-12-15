import { Router } from 'express';
import ClientController from '../Controllers/ClientController';
import AccountController from '../Controllers/AccountController';

const router = Router();

const clientController = new ClientController();
const accountController = new AccountController();

router.get('/client', clientController.index);
router.post('/client/store', clientController.store);

router.post('/client/:id/account/store', accountController.store);

export default router;
