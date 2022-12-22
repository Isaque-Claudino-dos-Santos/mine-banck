import QueryTable from '../QueryMysql/QueryTable'

export default abstract class Migration {
  protected readonly table = new QueryTable()

  abstract name: string

  abstract up(): string

  abstract down(): string

  abstract associates(): string[]
}
