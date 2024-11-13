const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres://postgres:lordtania@localhost:5432/banco');

module.exports = sequelize;