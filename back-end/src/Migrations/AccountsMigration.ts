import Migration from '../DB/Migration'

export default class AccountMigration extends Migration {
  name: string = 'accounts'

  up(): string {
    return this.table
      .create(this.name)
      .column('id', ['int', 'auto_increment', 'primary key', 'not null'])
      .column('money', ['int', 'default(0)'])
      .column('client_id', ['int'])
      .build()
  }

  down(): string {
    return this.table.drop(this.name).build()
  }

  associates(): string[] {
    return [
      this.table
        .assoc(this.name, 'client_id')
        .reference('clients', 'id')
        .onDelete('cascade')
        .onUpdate('cascade')
        .build(),
    ]
  }
}
