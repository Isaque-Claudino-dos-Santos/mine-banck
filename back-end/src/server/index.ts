import express, { Express } from 'express';
import { env } from 'process';

const app: Express = express();

app.use(express.json());

app.listen(env.APP_PORT, env.APP_HOST, () => {
  console.log(`Open port in http://${env.APP_HOST}:${env.APP_PORT}`);
});

export default app;
