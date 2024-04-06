import { Environment } from "./environment.interface";
require('dotenv').config()

export const environment: Environment = {
  production: false,
  db_url: process.env.MONGO_URI,
};
