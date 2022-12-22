export default class QueryDropTable {
  constructor(private readonly tableName: string) {}

  public build(): string {
    return `drop table ${this.tableName}`
  }
}
