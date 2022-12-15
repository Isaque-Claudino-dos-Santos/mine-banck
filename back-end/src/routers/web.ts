import { Router } from 'express';
import ClientController from '../Controllers/ClientController';

const router = Router();

const clientController = new ClientController();

router.get('/client', clientController.index);
router.post('/client/store', clientController.store);

export default router;
