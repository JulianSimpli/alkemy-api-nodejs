const Sequelize = require('sequelize');
const db = require('../config/db');

const transaction = db.define('transaction', {
    concept: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    type: Sequelize.STRING
});

module.exports = transaction;