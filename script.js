const getComputerChoice = () => {
  const listChoice = ['rock', 'paper', 'scissor'];
  let randomIndex = Math.floor(Math.random() * listChoice.length);
  let randomChoice = listChoice[randomIndex];
  return randomChoice;
};

const getHumanChoice = () => {
  const listChoice = ['rock', 'paper', 'scissor'];
  let userInput;

  const isValidChoice = (input) => {
    return listChoice.includes(input);
  };

  do {
    userInput = prompt(
      userInput ? 'try again: pick from rock, paper, or scissor' : 'Lets begin: rock paper or scissor'
    ).toLowerCase();
  } while (!isValidChoice(userInput));

  return userInput;
};

function playRound(getHumanChoice, getComputerChoice, humanScore, computerScore) {
  const outcome = { rock: 'scissor', scissor: 'paper', paper: 'rock' };
  let humanChoiceLow = getHumanChoice().toLowerCase();
  let computerChoiceLow = getComputerChoice().toLowerCase();

  if (humanChoiceLow == computerChoiceLow) {
    console.log('its a tie, both chose: ' + humanChoiceLow);
  } else if (outcome[humanChoiceLow] == computerChoiceLow) {
    console.log('You win! ' + humanChoiceLow + ' beats ' + computerChoiceLow);
    humanScore++;
  } else {
    console.log('You lose! ' + computerChoiceLow + ' beats ' + humanChoiceLow);
    computerScore++;
  }
  console.log('Player Score: ' + humanScore + ', Computer Score: ' + computerScore);
  return [humanScore, computerScore];
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  for (let i = 0; i < 5; i++) {
    [humanScore, computerScore] = playRound(getHumanChoice, getComputerChoice, humanScore, computerScore);
  }
  console.log('Final Player Score: ' + humanScore + ', Final Computer Score: ' + computerScore);
}
playGame();
