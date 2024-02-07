const Sequelize = require('sequelize');
const configDB = require('../config/database');

const connection = new Sequelize(configDB)  // dados do banco de dados

module.exports = connection