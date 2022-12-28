import MysqlQueryString from 'mysql-qs-creator'

export type FSchemeCreate = MysqlQueryString['table']['create']
export type FSchemeDrop = MysqlQueryString['table']['drop']

export default abstract class Migration {
  abstract up(create: FSchemeCreate): string

  abstract down(drop: FSchemeDrop): string

  /**To inplement future ... */
  //abstract associates(): string[] | null
}
