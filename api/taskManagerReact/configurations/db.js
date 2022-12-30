const { Pool, Client } = require('pg');
require("dotenv").config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.TASK_MANAGER_REACT_PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})


const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.TASK_MANAGER_REACT_PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})
client.connect();

module.exports = {client};