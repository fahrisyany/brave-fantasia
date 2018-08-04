"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
  
    */
    return queryInterface.bulkInsert(
      "Summons",
      [
        {
          name: "Mordecai",
          element: "fire",
          rarity: "SR",
          health: 2600,
          mana: 600,
          attack: 425,
          defense:790,
          agility: 415,
          effect: "flame sword barrage",
          image: "https://i.imgur.com/dbFwYTr.png"
        },
        {
          name: "tiamat",
          element: "light",
          rarity: "UR",
          health: 7500,
          mana: 2080,
          attack: 685,
          defense: 480,
          agility: 585,
          effect: "tetra flare",
          image: "https://i.imgur.com/uJrjTtt.png"
        },
        {
          name: "djinn",
          element: "fire",
          rarity: "SR",
          health: 3300,
          mana: 380,
          attack: 325,
          defense:450,
          agility: 295,
          effect: "hell fire",
          image: "https://i.imgur.com/JFSF2V1.png",
        },
        {
          name: "leviathan",
          element: "water",
          rarity: "SR",
          health: 3100,
          mana: 730,
          attack: 335,
          defense: 420,
          agility: 130,
          effect: "tidal wave",
          image: "https://i.imgur.com/9YMOrUX.png",
        },
        {
          name: "Odin",
          element: "Light",
          rarity: "UR",
          health: 3300,
          mana: 330,
          attack: 435,
          defense: 290,
          agility: 330,
          effect: "ragnarok",
          image: "https://i.imgur.com/M2lpHxg.png",
        },
        {
          name: "belias",
          element: "dark",
          rarity: "UR",
          health: 2300,
          mana: 570,
          attack: 385,
          defense: 190,
          agility: 120,
          effect: "damnation",
          image: "https://i.imgur.com/hRYjfRS.png",
        },
        {
          name: "Titan",
          element: "earth",
          rarity: "SR",
          health: 5500,
          mana: 100,
          attack: 135,
          defense: 690,
          agility: 80,
          effect: "earth shaker",
          image: "https://i.imgur.com/LqwuxlB.png",
        },
        {
          name: "bahamut",
          element: "light",
          rarity: "UR",
          health: 4300,
          mana: 600,
          attack: 535,
          defense: 390,
          agility: 380,
          effect: "mega flare",
          image: "https://i.imgur.com/BgnhMjw.png",
        },
        {
          name: "ifreet",
          element: "fire",
          rarity: "UR",
          health: 2450,
          mana: 300,
          attack: 445,
          defense: 235,
          agility: 450,
          effect: "mega flare",
          image: "https://i.imgur.com/grakxKe.png",
        },
        {
          name: "poseido",
          element: "water",
          rarity: "UR",
          health: 7300,
          mana: 300,
          attack: 385,
          defense: 410,
          agility: 160,
          effect: "tidal storm",
          image: "https://i.imgur.com/67eHyiZ.png",
        },
        {
          name: "metatron",
          element: "light",
          rarity: "SR",
          health: 1600,
          mana: 400,
          attack: 825,
          defense: 800,
          agility: 740,
          effect: "ex machina",
          image: "https://i.imgur.com/3VKlZ6V.png",
        },
        {
          name: "cerberus",
          element: "fire",
          rarity: "SR",
          health: 3600,
          mana: 400,
          attack: 685,
          defense: 200,
          agility: 340,
          effect: "hells bite",
          image: "https://i.imgur.com/dNuKxCr.png",
        },
        {
          name: "lucifer",
          element: "divine",
          rarity: "UR",
          health: 10000,
          mana: 1230,
          attack: 570,
          defense: 260,
          agility: 720,
          effect: "angel's sin",
          image: "https://i.imgur.com/qPfOlkC.png",
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
