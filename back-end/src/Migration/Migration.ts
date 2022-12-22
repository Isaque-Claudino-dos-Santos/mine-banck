import QueryCreateTable from '../QueryMysql/QueryTable/QueryCreateTable'
import QueryDropTable from '../QueryMysql/QueryTable/QueryDropTable'
import QueryTable from '../QueryMysql/QueryTable/QueryTable'

export default abstract class Migration {
  protected readonly table = new QueryTable()

  abstract up(): QueryCreateTable

  abstract down(): QueryDropTable
}
