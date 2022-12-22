import QueryTable from '../QueryMysql/QueryTable'

export default abstract class Migration {
  protected readonly table = new QueryTable()

  abstract up(): string

  abstract down(): string
}
