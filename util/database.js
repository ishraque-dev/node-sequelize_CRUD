const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'mysql15055', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
