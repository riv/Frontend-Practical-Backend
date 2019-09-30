const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// const { sequelize, models } = require('./models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(404);
});

const users = require('./fixtures/users');
const auctions = require('./fixtures/auctions');

app.get('/auctions', (req, res) => {
    res.json(auctions);
});

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/users/:userId', (req, res) => {
    if (req.params.userId in users) {
        res.json(users[req.params.userId]);
    } else {
        res.status(204);
    }
})

// sequelize.sync().then(() => {
//     app.listen(port);
// });

app.listen(port);