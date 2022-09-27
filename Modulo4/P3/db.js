const Sequelize = require('sequelize');
const sequelize = new Sequelize('db', 'jadley', 'jatjs123', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;