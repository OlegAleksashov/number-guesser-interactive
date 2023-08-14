let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, targNum) => {
  function difference(a, b) {
  return Math.abs(a - b);
}
  if (difference(userGuess, targNum) <= difference(computerGuess, targNum)) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winnerOfRound) => {
  if (winnerOfRound === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber = currentRoundNumber += 1;
  return currentRoundNumber;
};