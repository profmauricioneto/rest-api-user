const express = require('express');
const users = require('./controller/users');

const routes = express.Router(); 

routes.get('/users', users.findAll);
routes.get('/users/:id', users.findUserById);
routes.post('/users', users.createUser);
routes.put('/users/:id', users.updateUser);
routes.delete('/users/:id', users.deleteUser);

module.exports = routes;
