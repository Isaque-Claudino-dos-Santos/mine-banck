import QueryCrateTable from './QueryCreateTable'

export default class QueryTable {
  public create(): QueryCrateTable {
    return new QueryCrateTable()
  }
}
