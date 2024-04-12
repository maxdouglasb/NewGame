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
 
  if (humanScoreNumber === 10) {
    resultado.innerHTML = "Você e Campeão";
    document.querySelector("#rock").disabled = true;
    document.querySelector("#scissors").disabled = true;
    document.querySelector("#paper").disabled = true;
    alert('Parabens Você e Top. Aguarde  A pagina Carregar')
    setTimeout(function () {
      location.reload();
    }, 10000);
  }
  if (machineScoreNumber === 10) {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#scissors").disabled = true;
    document.querySelector("#paper").disabled = true;
    resultado.innerHTML = "Você e Perdeu Feio";
    alert('Parabens Você e Horrivel. Aguarde  A pagina Carregar')
    setTimeout(function () {
      location.reload();
    }, 10000);
  }
};
