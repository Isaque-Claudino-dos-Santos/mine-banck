import { SequelizeOptions } from 'sequelize-typescript';
import { env } from 'process';
import { Dialect } from 'sequelize';
import path from 'path';

const config: SequelizeOptions = {
  dialect: env.DB_DIALECT as Dialect,
  database: env.DB_DBNAME,
  host: env.DB_HOST,
  port: Number(env.DB_PORT),
  password: env.DB_PASS,
  username: env.DB_USER,
  models: [path.resolve(__dirname, '..', 'Models', '**', '*.ts')],
};

export default config;
