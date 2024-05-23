import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.Aiven_host,
  user: process.env.Aiven_user,
  password: process.env.Aiven_password,
  database: process.env.Aiven_DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
