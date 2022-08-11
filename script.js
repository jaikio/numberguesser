let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (human, computer, secret) => {
  let distanceHuman = secret - human;
  distanceHuman < 0 ? distanceHuman * -1 : distanceHuman;

  let distanceComputer = secret - computer;
  distanceComputer < 0 ? distanceComputer * -1 : distanceComputer;

  // checks and returns false only if cpu wins
  return distanceComputer < distanceHuman ? false : true;
};

const updateScore = winner =>
  winner === "human" ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;
