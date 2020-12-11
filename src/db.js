const { Client } = require('pg');

//Database SETUP
const client = new Client({
    connectionString: process.env.DATABASE_URL || process.env.PG_URL,
    ssl: {
      rejectUnauthorized: false
    }
});

module.exports = client;