import Migration from '../DB/Migration'

export default class ClientsMigration extends Migration {
  public name: string = 'clients'

  public up(): string {
    return this.table
      .create(this.name)
      .column('id', ['int', 'primary key', 'auto_increment', 'not null'])
      .column('fistName', ['varchar(20)', 'not null'])
      .column('lastName', ['varchar(40)', 'not null'])
      .column('nickName', ['varchar(100)', 'not null'])
      .column('email', ['varchar(200)', 'not null'])
      .column('password', ['varchar(300)', 'not null'])
      .build()
  }

  public down(): string {
    return this.table.drop(this.name).build()
  }
}
