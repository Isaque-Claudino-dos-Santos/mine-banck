export default class QueryCrateTable {
  private columns: string[] = []

  constructor(private tableName: string) {}

  private hasBeenDefinedColumns(): boolean {
    return this.columns.length > 0
  }

  public column(columnName: string, attributes: string[]): this {
    this.columns.push(`${columnName} ${attributes.join(' ')}`)
    return this
  }

  public build(): string {
    if (!this.hasBeenDefinedColumns())
      throw new Error(`Any columns defined with table name ${this.tableName}`)

    let query = `create table ${this.tableName}`
    query += `(${this.columns.join(', ')})`
    return query
  }
}
