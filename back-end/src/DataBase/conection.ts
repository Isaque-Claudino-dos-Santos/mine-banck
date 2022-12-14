import { Sequelize } from 'sequelize';
import config from './Config';

const sequelize = new Sequelize(config);

export default sequelize;
