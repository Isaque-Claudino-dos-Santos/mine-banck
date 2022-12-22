import QueryCreateTable from './QueryCreateTable'

export default class QueryTable {
  public create(tableName: string): QueryCreateTable {
    return new QueryCreateTable(tableName)
  }
}
