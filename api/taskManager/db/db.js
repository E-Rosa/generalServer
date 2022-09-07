
const { Pool, Client } = require('pg')

const taskManagerPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'task_manager',
  password: '2010elias',
  port: 5432,
})

const taskManagerClient = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'task_manager',
    password: '2010elias',
    port: 5432,
});
taskManagerClient.connect();

module.exports = {taskManagerClient}





