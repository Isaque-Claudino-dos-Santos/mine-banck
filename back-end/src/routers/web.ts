import { Router } from 'express';
import ClientController from '../Controllers/ClientController';
import AccountController from '../Controllers/AccountController';

const router = Router();

const clientController = new ClientController();
const accountController = new AccountController();

router.get('/client', clientController.index);
router.post('/client/store', clientController.store);

router.get('/client/:client_id/account', accountController.index);
router.post('/client/:client_id/account/store', accountController.store);

export default router;
