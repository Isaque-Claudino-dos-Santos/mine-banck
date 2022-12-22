export default class QueryDropTable {
  constructor(private readonly table: string) {}

  public build(): string {
    return `drop table ${this.table}`
  }
}
