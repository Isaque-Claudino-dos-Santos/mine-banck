import { Dialect, Options } from 'sequelize';
import { env } from 'process';

const config: Options = {
  dialect: env.DB_DIALECT as Dialect,
  database: env.DB_DBNAME,
  host: env.DB_HOST,
  port: Number(env.DB_PORT),
  password: env.DB_PASS,
  username: env.DB_USER,
};

export default config;
