"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
 
    */
    return queryInterface.bulkInsert(
      "Champions",
      [
        {
          name: "percival",
          element: "fire",
          rarity: "UR",
          effect: "the flame emperror",
          image: "https://i.imgur.com/XvZhqJb.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "chronos",
          element: "light",
          rarity: "UR",
          effect: "sanctum",
          image: "https://i.imgur.com/mkPOVqB.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "lancelot",
          element: "water",
          rarity: "UR",
          effect: "jetstream",
          image: "https://i.imgur.com/o1qbgwK.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "siegfried",
          element: "dark",
          rarity: "UR",
          effect: "soul eater",
          image: "https://i.imgur.com/7HkJpvF.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "venus",
          element: "dark",
          rarity: "UR",
          effect: "acursed light",
          image: "https://i.imgur.com/creERA4.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "cain",
          element: "wind",
          rarity: "UR",
          effect: "Midare Setsugekka",
          image: "https://i.imgur.com/Ttg8gH6.png",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
