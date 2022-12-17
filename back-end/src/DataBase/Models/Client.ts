import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType,
  PrimaryKey,
  AutoIncrement,
  HasOne,
} from 'sequelize-typescript';

import Account from './Account';

@Table({
  timestamps: true,
  tableName: 'clients',
})
class Client extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @HasOne(() => Account, {
    foreignKey: 'id',
    as: 'account_id',
    onDelete: 'CASCADE',
  })
  @Column(DataType.INTEGER)
  account!: Account;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  surname!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  nickname!: string;

  @Column(DataType.STRING)
  password!: string;

  @CreatedAt
  createAt!: Date;

  @UpdatedAt
  updateAt!: Date;
}

export default Client;
