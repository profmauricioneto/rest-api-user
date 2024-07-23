const express = require('express');
const routes = require('./routes');
const db = require('./database/db');

const server = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse the body of the request
server.use(express.json());
server.use(routes); 

// Connect to the database throw sequelize
db.sequelize.sync().then(() => {
    console.log(`Database ${process.env.DB_NAME} connected`);
}).catch((error) => {
    console.log(`Error connecting to database.`);
    console.log(error);
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});