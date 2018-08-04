"use strict";
module.exports = (sequelize, DataTypes) => {
  var Champion = sequelize.define(
    "Champion",
    {
      name: DataTypes.STRING,
      element: DataTypes.STRING,
      rarity: DataTypes.STRING,
      effect: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {}
  );
  Champion.associate = function(models) {
    // associations can be defined here
  };

  Champion.prototype.skill = function() {
    if (this.effect == "jetstream") {
      return;
      models.Cards.attack += 2000;
    }
  };

  return Champion;
};
