// Libraries
const { Pool } = require('pg');

// Utilities
const { dbConfig } = require('./config.js');

// DB Connection
const pool = new Pool(dbConfig);

module.exports.pool = pool;
