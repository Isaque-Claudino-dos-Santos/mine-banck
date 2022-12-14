import 'dotenv/config';
import app from './server';

import { web } from './routers';

app.use(web);
