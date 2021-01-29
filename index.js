const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require('./models/transactionModel');
db.sync()
    .then(() => console.log(`Connected to server`))
    .catch(err => console.log(err));

app.use('/', routes());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});