const {Pool} = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

const pool = new Pool();