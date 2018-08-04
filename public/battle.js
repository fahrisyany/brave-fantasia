var animateButton = function(e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function() {
    e.target.classList.remove("animate");
  }, 700);
};

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}

let player1_Name = document.getElementById("monsterPlayer1_name").value;
  let health1 = document.getElementById("health1");
  let player1_health = document.getElementById("monsterPlayer1_health").value;
  let player1_element = document.getElementById("monsterPlayer1_element").value;
  let player1_attack = document.getElementById("monsterPlayer1_attack").value;
  let player1_defense = document.getElementById("monsterPlayer1_defense").value;
  let player1_agility = document.getElementById("monsterPlayer1_agility").value;
  let player1_effect = document.getElementById("monsterPlayer1_effect").value;

  //Summmon player 1//
  let player2_Name = document.getElementById("monsterPlayer2_name").value;
  let health2 = document.getElementById("health2");
  let player2_health = document.getElementById("monsterPlayer2_health").value;
  let player2_element = document.getElementById("monsterPlayer2_element").value;
  let player2_attack = document.getElementById("monsterPlayer2_attack").value;
  let player2_defense = document.getElementById("monsterPlayer2_defense").value;
  let player2_aglity = document.getElementById("monsterPlayer2_agility").value;

  //champion Player1//

  let currentHealth1 = player1_health;
  let currentHealth2 = player2_health;
  let champion1_effect = document.getElementById("champion1_effect").value;
  let champion2_effect = document.getElementById("champion2_effect").value;

if (champion1_effect == "jetstream" && player1_element == "water") {
  alert("lancelot uses jetstream! add 200 atk to water elements ");
  // return 200;
}

if (champion2_effect == "jetstream" && player2_element == "water") {
  alert("lancelot uses jetstream! add 200 atk to water elements ");
  // return 200;
}


function engage() {
  // sleep(1000);
  // var music = new Audio("/audio/Flash1.mp3");
  // music.play();
  //Summmon player 1//
  

  // alert(champion1_effect)

  var interval = setInterval(function battle() {
    function effectPlayer1() {
      if (champion1_effect == "jetstream" && player1_element == "water") {
        // alert("lancelot uses jetstream! add 200 atk to water elements ");
        return 200 * (100 / (100 + player2_defense));
      } else {
        return 0;
      }
    }

    function effectPlayer2() {
      if (champion2_effect == "jetstream" && player2_element == "water") {
        // alert("lancelot uses jetstream! add 200 atk to water elements ");
        return 20;
      } else {
        return 0;
      }
    }

    function calculateDamage_1() {
      return (health2.value -=
        effectPlayer1() + player1_attack * (100 / (100 + player2_defense)));
    }

    function calculateDamage_2() {
      // alert(effectPlayer2())
      return (health1.value -=
        effectPlayer2() + player2_attack * (100 / (100 + player1_defense)));
    }

    if (health2.value > 0) {
      // alert("kk");

      calculateDamage_1();
    }

    if (health1.value <= 0) {
      // health1.value = 0;

      $(document).ready(function() {
        clearInterval(interval);

        // alert(`${player2_Name} win !`);
        $("#animationMonster1").fadeOut(1000); // 5 seconds x 1000 milisec = 5000 milisec

        setInterval(function repeat() {
          window.location.reload(1);
          setTimeout(1);
        }, 1200);
        repeat();
        // $(document).ready(function() {
        //   setTimeout(function() {
        //     clearInterval(interval);

        //     window.prompt(`${player2_Name} wins!`, "you gain 1000 gil!!");
        //     location.href = "/battles";
        //   }, 1100);
        // });
      });
    }

    if (health1.value > 0) {
      calculateDamage_2();
      // calculateDamage_2();
    }

    if (health2.value <= 0) {
      clearInterval(interval);

      // health2.value = 0;

      $(document).ready(function() {
        // alert(`${player1_Name} win !`);
        $("#animationMonster2").fadeOut(1000); // 5 seconds x 1000 milisec = 5000 milisec

        setInterval(function repeatBattle() {
          // clearInterval(interval);

          window.location.reload(1);
          setTimeout(1);
        }, 1200);
        repeatBattle();
        // $(document).ready(function() {
        //   setTimeout(function() {
        //     window.prompt(`${player1_Name} wins!`, "you gain 1000 gil!!");
        //     location.href = "/battles";
        //   }, 1100);
        // });
      });
    }

    // if (health1.value < 0 && health1.value < 0) {
    //   currentHealth1 = 0;
    //   currentHealth2 = 0;

    //   $(document).ready(function() {
    //     $("#plsme1").fadeOut(500); // 5 seconds x 1000 milisec = 5000 milisec
    //     clearInterval(interval);
    //   });

    //   $(document).ready(function() {
    //     $("#plsme2").fadeOut(500); // 5 seconds x 1000 milisec = 5000 milisec
    //     clearInterval(interval);
    //     $(document).ready(function() {
    //       setTimeout(function() {
    //         window.prompt(`draw`);
    //         location.href = "/battles";
    //       }, 1100);
    //     });
    //   });
    // }

    // alert(health2.value);
  });
}
