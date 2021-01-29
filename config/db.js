const { Sequelize } = require('sequelize');

const db = new Sequelize('alkemydb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;