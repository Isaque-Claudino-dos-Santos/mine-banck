import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import Client from './Client';

@Table({
  timestamps: true,
  tableName: 'accounts',
})
class Account extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => Client)
  @BelongsTo(() => Client, {
    foreignKey: 'id',
    as: 'client',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Column(DataType.INTEGER)
  client_id!: Client;

  @Default(0)
  @Column(DataType.FLOAT)
  money!: number;
}

export default Account;
