import QueryCrateTable from './QueryCreateTable'

export default class QueryTable {
  public create(tableName: string): QueryCrateTable {
    return new QueryCrateTable(tableName)
  }
}
