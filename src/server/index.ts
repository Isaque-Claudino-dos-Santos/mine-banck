import express, { Express } from 'express';
import { env } from 'process';

const app: Express = express();

app.listen(env.APP_PORT, () => {
  console.log(`Open port in http://localhost:${env.APP_PORT}`);
});

export default app;
