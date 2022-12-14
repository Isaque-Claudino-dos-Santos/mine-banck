import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import Client from './Client';

@Table({
  timestamps: true,
  tableName: 'account',
})
class Account extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @HasOne(() => Client)
  @Column
  clientID!: number;

  @Default(0)
  @Column(DataType.FLOAT)
  balance!: number;
}

export default Account;
