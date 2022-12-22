export default class QueryAssociateTable {
  private tableRef: string = ''
  private primaryKey: string = ''

  constructor(
    private readonly table: string,
    private readonly foreignKey: string
  ) {}

  public reference(table: string, primaryKey: string): this {
    this.tableRef = table
    this.primaryKey = primaryKey
    return this
  }

  public build(): string {
    if (this.tableRef === '' || this.primaryKey === '')
      throw console.log('Reference not passed!')

    return `alter table ${this.table} add foreign key (${this.foreignKey}) references ${this.tableRef}(${this.primaryKey})`
  }
}
