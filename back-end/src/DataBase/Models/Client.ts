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
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import Account from './Account';

@Table({
  timestamps: true,
  tableName: 'client',
})
class Client extends Model {
  @PrimaryKey
  @AutoIncrement
  @ForeignKey(() => Account)
  @Column(DataType.INTEGER)
  id!: number;

  @BelongsTo(() => Account)
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
