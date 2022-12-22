export default class QueryCrateTable {
  private tableName: string | undefined = undefined
  private columns: string[] = []

  private HasBeenDefinedtableName(): boolean {
    return typeof this.tableName !== 'undefined'
  }

  private hasBeenDefinedColumns(): boolean {
    return this.columns.length > 0
  }

  public name(tableName: string): this {
    this.tableName = tableName
    return this
  }

  public column(columnName: string, attributes: string[]): this {
    this.columns.push(`${columnName} ${attributes.join(' ')}`)
    return this
  }

  public build(): string {
    if (!this.HasBeenDefinedtableName())
      throw new Error('The table name not define in query')

    if (!this.hasBeenDefinedColumns())
      throw new Error(`Any columns defined with table name ${this.tableName}`)

    let query = `create table ${this.tableName}`
    query += `(${this.columns.join(', ')})`
    return query
  }
}
