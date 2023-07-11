const express = require('express');
const ownerController = require('./controllers/owner.controller');

const app = express();

app.use(express.json());

app.get('/owners', ownerController.getAll);
app.get('/owners/:id', ownerController.getById);
app.post('/owners', ownerController.create);

module.exports = app;