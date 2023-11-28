import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ormConfigOptions } from "src/infrastructure/config/typeorm/typeOrm.config";
import { entitiesAndMigrationsConfig } from "src/database/entities-and-migrations.webpack-context.config";

@Module({
  imports: [TypeOrmModule.forRoot({ ...ormConfigOptions, ...entitiesAndMigrationsConfig }), HealthModule],
})
export class AppModule {}
