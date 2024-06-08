// Imports connect and connection from mongoose library
const { connect, connection } = require('mongoose');

// Defines connection string from local mongo db to social db
const connectionString = 'mongodb://127.0.0.1:27017/socialDB';

// Establishes connection between mongo db and social db
connect(connectionString);

// Exports connection
module.exports = connection;