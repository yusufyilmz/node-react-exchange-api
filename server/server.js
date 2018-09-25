require('./config/config');
const express = require('express');
const helmet = require("helmet");
const bodyParser = require('body-parser');
var controller = require('./controller/exchangeController');
var { accessControlMiddleware } = require('./middleware/accessControlMiddleware');
const { logMiddleware } = require('./middleware/logMiddleware');

var app = express();
app.use(bodyParser.json());
app.use(accessControlMiddleware);
app.use(logMiddleware);
app.use(helmet());

app.get('/products', controller.getProducts);

app.get('/products/:productId/prices', controller.getProductPrice);

app.use((req, res, next) => {
    res.status(404).send({message: 'Not found'});
});

app.listen(process.env.PORT, () => {
    console.log('Started on port', process.env.PORT);
});

module.exports = { app };