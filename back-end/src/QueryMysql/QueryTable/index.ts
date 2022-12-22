import QueryCreateTable from './QueryCreateTable'
import QueryDropTable from './QueryDropTable'

export default class QueryTable {
  public create(tableName: string): QueryCreateTable {
    return new QueryCreateTable(tableName)
  }

  public drop(tableName: string): QueryDropTable {
    return new QueryDropTable(tableName)
  }
}
