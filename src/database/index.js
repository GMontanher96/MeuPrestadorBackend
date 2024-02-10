const Sequelize = require('sequelize');
const configDB = require('../config/database');

const User = require('../models/User') // chama a classe User
const Profile = require('../models/Profile')

const connection = new Sequelize(configDB)  // dados do banco de dados

User.init(connection)
Profile.init(connection)

User.associate(connection.models);

module.exports = connection