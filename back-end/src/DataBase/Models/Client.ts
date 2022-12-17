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

  @ForeignKey(() => Account)
  @HasOne(() => Account, {
    foreignKey: 'id',
    as: 'account',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Column
  account_id!: number;

  @Column
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

  @Column
  password!: string;

  @CreatedAt
  createAt!: Date;

  @UpdatedAt
  updateAt!: Date;
}

export default Client;
