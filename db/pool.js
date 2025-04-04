require("dotenv").config();
const { Pool } = require("pg");

// for local db

// module.exports = pool = new Pool({
//   host: process.env.HOST_ENV,
//   user: process.env.USER_ENV,
//   database: process.env.DATABASE_ENV,
//   password: process.env.PASSWORD_ENV,
//   port: process.env.DATABASE_PORT_ENV,
// });

// for prod db

module.exports = pool = new Pool({
  connectionString: process.env.DATABASE_URL,

  ssl: {
    rejectUnauthorized: false,
  },
});
