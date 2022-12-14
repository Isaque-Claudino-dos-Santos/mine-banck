import 'dotenv/config';
import app from './server';

import * as router from './routers';

app.use(router.web);
