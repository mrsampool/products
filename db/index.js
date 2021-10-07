// Libraries
const { Pool } = require('pg');

// Utilities
const { dbConfig } = require('./config.js');

// DB Connection
const pool = new Pool(dbConfig);
/*
pool.connect()
.then( console.log('\nConnected to PG!', '🐘🥜') )
.catch( err => console.log( err ));
*/
module.exports.pool = pool;