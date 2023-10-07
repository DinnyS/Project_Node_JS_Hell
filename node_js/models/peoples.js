const { DataTypes } = require('sequelize');

const { sequelize } = require('../config/database');

const People = sequelize.define('People', {
    
  fname: {
    type: DataTypes.STRING
  },
  lname: {
    type: DataTypes.STRING
  },
  deathday: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.STRING
  },
  nationality: {
    type: DataTypes.STRING
  },
  causeOfdeath: {
    type: DataTypes.STRING
  },
  place: {
    type: DataTypes.STRING
  },
  sin: {
    type: DataTypes.STRING
  },
  time: {
    type: DataTypes.STRING
  },
  hell: {
    type: DataTypes.STRING
  },
  warden: {
    type: DataTypes.STRING
  }
});

module.exports = People;