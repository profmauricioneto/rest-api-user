const Sequelize = require("sequelize");
const dotenv = require("dotenv/config.js"); 

// Load environment variables
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

// Create a new instance of Sequelize
var sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: "mysql",
    port: 3306,
});


module.exports = {sequelize};