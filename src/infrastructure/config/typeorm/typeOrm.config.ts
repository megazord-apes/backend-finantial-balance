import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { configDotenv } from "dotenv";

configDotenv();

export const ormConfigOptions = {
  type: "postgres",
  autoLoadEntities: true,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT || ""),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  schema: process.env.DATABASE_SCHEMA,
  migrationsRun: true,
  dropSchema: false,
  synchronize: true,
  cli: {
    entitiesDir: "src/database/entity",
    migrationsDir: "src/database/migrations",
    subscribersDir: "src/database/subscriber",
    seedsDir: "src/database/seeds",
  },
  migrations: ["src/database/migrations/**/*{.ts,.js}"],
  entities: ["src/database/entities/**/*{.ts,.js}"],
  seeds: ["src/database/seeds/**/*{.ts,.js}"],
  migrationsTableName: "migrations",
} as TypeOrmModuleOptions;
