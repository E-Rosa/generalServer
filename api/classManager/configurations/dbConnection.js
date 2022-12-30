"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = require("pg");
require("dotenv").config();
const portStringValue = process.env.PORT;
const portNumberValue = parseInt(portStringValue);
const pool = new pg_1.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.CLASS_MANAGER_PGDATABASE,
    password: process.env.PGPASSWORD,
    port: portNumberValue
});
const client = new pg_1.Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.CLASS_MANAGER_PGDATABASE,
    password: process.env.PGPASSWORD,
    port: portNumberValue
});
exports.client = client;
client.connect();
