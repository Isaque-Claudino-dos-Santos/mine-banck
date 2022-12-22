type TypeRefOptions =
  | 'cascade'
  | 'set null'
  | 'restrict'
  | 'no action'
  | 'set default'

export default class QueryAssociateTable {
  private tableRef: string = ''
  private primaryKey: string = ''
  private update: TypeRefOptions = 'set default'
  private delete: TypeRefOptions = 'set default'

  constructor(
    private readonly table: string,
    private readonly foreignKey: string
  ) {}

  public onUpdate(option: TypeRefOptions): this {
    this.update = option
    return this
  }

  public onDelete(option: TypeRefOptions): this {
    this.delete = option
    return this
  }

  public reference(table: string, primaryKey: string): this {
    this.tableRef = table
    this.primaryKey = primaryKey
    return this
  }

  public build(): string {
    if (this.tableRef === '' || this.primaryKey === '')
      throw console.log('Reference not passed!')

    return `alter table ${this.table} add foreign key (${this.foreignKey}) references ${this.tableRef}(${this.primaryKey}) on update ${this.update} on delete ${this.delete}`
  }
}
