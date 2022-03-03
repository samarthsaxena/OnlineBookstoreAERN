// Load the local system variables from .env via dotenv module
require('dotenv').config();

const harperive = require('harperive');

// Create the DB_CONFIG with the .env's file
const DB_CONFIG = {
    harperHost: process.env.HOST,
    token: process.env.TOKEN,
    schema: process.env.SCHEMA
}


const Client = harperive.Client;
const db = new Client(DB_CONFIG);

// Export the db instance so that other modules can import and start using.
module.exports = db;
