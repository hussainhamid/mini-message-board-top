require("dotenv").config();

const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255) NOT NULL,
message VARCHAR(1000) NOT NULL,
added TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO messages (username, message)
VALUES 
    ('jesse', 'yo, i got the blue'),
    ('walter', 'did jesse message you?'),
    ('skyler', 'I am skyler white, yo'),
    ('hank', 'hehe, i am dea'),
    ('mike', 'waltuh, waltuh, waltuh.')

`;

async function main() {
  console.log("seeding...");

  //for local db

  // const client = new Client({
  //   host: process.env.HOST_ENV,
  //   user: process.env.USER_ENV,
  //   database: process.env.DATABASE_ENV,
  //   password: process.env.PASSWORD_ENV,
  //   port: process.env.DATABASE_PORT_ENV,
  // });

  //for prod db

  const client = new Client({
    connectionString: process.env.DATABASE_URL,

    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
