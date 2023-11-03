"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const { Pool } = pg_1.default;
console.log();
const connection = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 0,
});
exports.default = connection;
//# sourceMappingURL=database.js.map