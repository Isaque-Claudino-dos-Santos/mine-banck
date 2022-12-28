import Migration, { FSchemeCreate, FSchemeDrop } from '../DataBase/Migration'

export default class ClientsMigration extends Migration {
  table = 'clients'

  up(create: FSchemeCreate): string {
    return create(this.table)
      .column('id', ['int', 'primaty key', 'auto_increment', 'not null'])
      .column('fistName', ['varchar(100)', 'not null'])
      .column('lastName', ['varchar(100)', 'not null'])
      .column('email', ['varchar(300)', 'not null'])
      .column('password', ['varchar(300)', 'noy null'])
      .end()
  }
  down(drop: FSchemeDrop): string {
    return drop(this.table).end()
  }
}
