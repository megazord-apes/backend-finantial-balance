import { DataSource, DataSourceOptions } from "typeorm";
import { ormConfigOptions } from "./src/infrastructure/config/typeorm/typeOrm.config";

export default new DataSource({
  ...(ormConfigOptions as DataSourceOptions),
});
