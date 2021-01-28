const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('alkemydb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;