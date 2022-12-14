import { Router } from 'express';
import HomeController from '../Controllers/HomeCotroller';

const router = Router();

const homeController = new HomeController();

router.get('/', homeController.index);

export default router;
