import {ConnectionOptions} from "typeorm";
import path from "path";

const isCompiled = path.extname(__filename).includes('js');

export default {
  name: "test",
  type: "postgres",
  host: process.env['HOST'] || "db",
  port: process.env['POSTGRESS_PORT'] ||  4533,
  username: process.env['POSTGRES_USER'] || "postgres",
  password: process.env['POSTGRES_PASSWORD'] || "postgres",
  database: process.env['POSTGRES_DB'] || "node_project",
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