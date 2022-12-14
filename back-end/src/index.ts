import 'dotenv/config';
import app from './server';

import router from './routes';

app.use(router);
