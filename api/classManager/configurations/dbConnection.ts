import { Client, Pool } from "pg";
require("dotenv").config();

const portStringValue = process.env.PORT as string;
const portNumberValue: number = parseInt(portStringValue)
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.CLASS_MANAGER_PGDATABASE,
  password: process.env.PGPASSWORD,
  port: portNumberValue
})


const client: Client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.CLASS_MANAGER_PGDATABASE,
  password: process.env.PGPASSWORD,
  port: portNumberValue
})
client.connect();

export {client}