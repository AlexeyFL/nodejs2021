import * as dotenv from 'dotenv';
import * as path from 'path';

// ENV

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});
const { PORT } = process.env;
const { NODE_ENV } = process.env;
const { MONGO_CONNECTION_STRING } = process.env;
const { JWT_SECRET_KEY } = process.env;
const { AUTH_MODE } = process.env;

// Routes
const EXCLUDE_ROUTES = ['/doc', '/', '/login'];

export {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE,
  EXCLUDE_ROUTES,
};
