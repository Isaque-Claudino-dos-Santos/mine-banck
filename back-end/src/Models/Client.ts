import { DataTypes, Model } from 'sequelize';
import DB from '../DataBase';

export default class Client extends Model {
  declare id: number;
  declare name: string;
  declare surname: string;
  declare nickname: string;
  declare email: string;
  declare password: string;

  declare createAt: Date;
  declare updateAt: Date;
}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    createAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
  },
  { sequelize: DB }
);
