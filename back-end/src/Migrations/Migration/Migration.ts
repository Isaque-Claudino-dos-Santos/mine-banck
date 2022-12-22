import QueryTable from '../../QueryMysql/QueryTable/QueryTable'

export default abstract class Migration {
  protected readonly table = new QueryTable()

  abstract up(): string

  abstract down(): string
}
