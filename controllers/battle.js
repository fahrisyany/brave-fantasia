const Summon = require("../models").Summon;
const Champion = require("../models").Champion;

class BattleController {
  static findAllSummon(req, res) {
    Summon.findAll()
      .then(summons => {
        let num1 = Math.floor(Math.random() * summons.length);
        let num2 = Math.floor(Math.random() * summons.length);

        req.session.playerSummon1 = summons[num1];
        req.session.playerSummon2 = summons[num2];

        let healthPlayer1 = req.session.playerSummon1.health;

        if (healthPlayer1 > 0) {
          healthPlayer1 -= req.session.playerSummon2;

          if (healthPlayer1 < 0) {
            healthPlayer1 = 0;
            console.log(`==>`, req.session.playerSummon1.name);
          }
        }

        // console.log(req.session);
        console.log(
          `==>`,
          req.session.playerSummon1.name,
          req.session.playerSummon2.name
        );

        Champion.findAll()
        .then(champions => {
          let num1 = Math.floor(Math.random() * champions.length);
          let num2 = Math.floor(Math.random() * champions.length);
          req.session.playerChampion1 = champions[num1];
          req.session.playerChampion2 = champions[num2];

          console.log(req.session.playerChampion1.name);
          console.log(req.session.playerChampion2.name);
          res.render("./battle/battle2.ejs", {
            err: null,
            monsters1: req.session.playerSummon1,
            monsters2: req.session.playerSummon2,
            champion1: req.session.playerChampion1,
            champion2: req.session.playerChampion2
          });
        });
      })
      .catch(err => {
        res.send({ err: err.message });
      });
  }
}

module.exports = BattleController;
