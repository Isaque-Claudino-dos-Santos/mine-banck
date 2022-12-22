export default class QueryExistTable {
  constructor(
    private readonly database: string,
    private readonly table: string
  ) {}

  build(): string {
    return `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE
    TABLE_SCHEMA = '${this.database}' AND 
    TABLE_NAME = '${this.table}'`
  }
}
