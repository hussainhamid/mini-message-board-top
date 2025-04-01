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
    ('amando', 'Hii there!'),
    ('charles', 'Hello world!');

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER_ENV}:${process.env.PASSWORD_ENV}@${process.env.HOST_ENV}:${process.env.DATABASE_PORT_ENV}/${process.env.DATABASE_ENV}`,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
