const express = require('express');
const ownerController = require('./controllers/owner.controller');

const app = express();

app.get('/owners', ownerController.getAll);
app.get('/owners/:id', ownerController.getById);

module.exports = app;