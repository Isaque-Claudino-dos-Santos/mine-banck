import QueryAssociateTable from './QueryAssociateTable'
import QueryCreateTable from './QueryCreateTable'
import QueryDropTable from './QueryDropTable'
import QueryExistTable from './QueryExistTable'

export default class QueryTable {
  public create(table: string): QueryCreateTable {
    return new QueryCreateTable(table)
  }

  public drop(table: string): QueryDropTable {
    return new QueryDropTable(table)
  }

  public exist(database: string, table: string): QueryExistTable {
    return new QueryExistTable(database, table)
  }

  public assoc(table: string, foreignKey: string): QueryAssociateTable {
    return new QueryAssociateTable(table, foreignKey)
  }
}
