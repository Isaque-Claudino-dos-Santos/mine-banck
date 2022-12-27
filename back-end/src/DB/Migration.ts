import MysqlQueryString from 'mysql-qs-creator'

export default abstract class Migration {
  protected readonly table = new MysqlQueryString().table

  abstract name: string

  abstract up(): string

  abstract down(): string

  abstract associates(): string[]
}
