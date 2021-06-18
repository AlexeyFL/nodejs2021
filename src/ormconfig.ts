import {ConnectionOptions} from "typeorm";
import path from "path";

const isCompiled = path.extname(__filename).includes('js');

export default {
  type: "postgres",
  host: process.env['POSTGRESS_HOST'],
  port: process.env['POSTGRESS_PORT'] ||  5432,
  username: process.env['POSTGRES_USER'] || "postgres",
  password: process.env['POSTGRES_PASSWORD'] || "12345",
  database: process.env['POSTGRES_DB'] || "postgres",
  synchronize: true,
  logging: true,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 2000,
  entities: [
    `src/entity/**/*.${isCompiled ? "js" : "ts"}`
  ],
  // migrations: [
  //   `src/migration/**/*.${isCompiled ? "js" : "ts"}`
  // ],
  cli: {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
  },
} as ConnectionOptions;