'use strict';
module.exports = (sequelize, DataTypes) => {
  var Summon = sequelize.define('Summon', {
    name: DataTypes.STRING,
    element: DataTypes.STRING,
    rarity: DataTypes.STRING,
    health: DataTypes.INTEGER,
    mana: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    agility: DataTypes.INTEGER,
    effect: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Summon.associate = function(models) {
    // associations can be defined here
  };
  return Summon;
};