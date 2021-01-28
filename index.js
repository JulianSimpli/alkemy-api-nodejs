const express = require('express');
const routes = require('./routes');
const db = require('./config/db');
const app = express();

require('./models/transactionModel');
db.sync()
    .then(() => console.log(`Connected to server`))
    .catch(err => console.log(err));

app.use('/', routes());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});