'use strict';
module.exports = (sequelize, DataTypes) => {
  var Player = sequelize.define('Player', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    gil: DataTypes.INTEGER,
    win: DataTypes.INTEGER,
    loss: DataTypes.INTEGER,
    avatar: DataTypes.STRING
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
  };




  return Player;
};


// sequelize model:generate --name champion --attributes name:string,rarity:string,effect:string