import { Sequelize } from 'sequelize-typescript';
import config from './Config';

const sequelize = new Sequelize(config);

export default sequelize;
