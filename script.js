const resultado = document.querySelector("#result");
const myScore = document.querySelector("#humanScore");
const machineScore = document.querySelector("#machineScore");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};
const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const radomNumber = Math.floor(Math.random() * 3);

  return choices[radomNumber];
};
const playTheGame = (human, machine) => {
  console.log(human, machine);
  if (human === machine) {
    resultado.innerHTML = "Deu Empate";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++;
    myScore.innerHTML = humanScoreNumber;
    resultado.innerHTML = "Você Ganhou";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    resultado.innerHTML = "Você Perdeu";
  }

  if (humanScoreNumber === 20) {
    document.querySelector("#result").innerHTML =
      "<img src='assets/campeao.jpg' width='250px'>";
    document.querySelector("#rock").disabled = true;
    document.querySelector("#scissors").disabled = true;
    document.querySelector("#paper").disabled = true;
    alert("Parabens Você e Top. Aguarde  A pagina Carregar");
    setTimeout(function () {
      location.reload();
    }, 10000);
  }
  if (machineScoreNumber === 20) {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#scissors").disabled = true;
    document.querySelector("#paper").disabled = true;

    document.querySelector("#result").innerHTML =
      "<img src='assets/loser.jpg' width='250px'>";
    alert("Parabens Você e Horrivel. Aguarde  A pagina Carregar");
    setTimeout(function () {
      location.reload();
    }, 10000);
  }
};
