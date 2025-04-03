require("dotenv").config();
const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: `postgresql://${process.env.USER_ENV}:${process.env.PASSWORD_ENV}@${process.env.HOST_ENV}:${process.env.DATABASE_PORT_ENV}/messages_db`,
});
