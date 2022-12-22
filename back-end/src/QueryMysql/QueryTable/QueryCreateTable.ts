export default class QueryCreateTable {
  private columns: string[] = []

  constructor(private table: string) {}

  private hasBeenDefinedColumns(): boolean {
    return this.columns.length > 0
  }

  public column(columnName: string, attributes: string[]): this {
    this.columns.push(`${columnName} ${attributes.join(' ')}`)
    return this
  }

  public build(): string {
    if (!this.hasBeenDefinedColumns())
      throw new Error(`Any columns defined with table name ${this.table}`)

    let query = `create table ${this.table}`
    query += `(${this.columns.join(', ')})`
    return query
  }
}
