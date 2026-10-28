function getComputerChoice() {
  return (Math.floor(Math.random() * 3))
}

function getHumanChoice() {
  let humanChoice = prompt("Make your play:")
  console.log(typeof humanChoice)
  return humanChoice.toLowerCase()
}

let humanScore = 0;
let computerScore = 0;

const playRound = function(humanChoice, computerChoice) {
  // convention => paper: 0, scissors: 1, rock: 2
  if (humanChoice === 'scissors') {
    if (computerChoice === 1) {
      console.log('It is a tie. Both chose scissors')
    } else if (computerChoice === 0) {
      console.log(`You win! ${humanChoice} beats paper.`)
      humanScore += 1;
    } else if (computerChoice === 2) {
      console.log(`You lose! Scissors loses to rock`)
      computerScore += 1;
    }
  }
  else if (humanChoice === 'paper') {
    if (computerChoice === 0) {
      console.log('It is a tie. Both chose paper')
    } else if (computerChoice === 1) {
      console.log('You lose! Paper loses to scissors')
      computerScore += 1;
    } else if (computerChoice === 2) {
      console.log('You win! Paper beats rock')
      humanScore += 1;
    }
  }
  else if (humanChoice === 'rock') {
    if (computerChoice === 0) {
      console.log('You lose! Rock loses to paper')
      computerScore += 1;
    } else if (computerChoice === 1) {
      console.log('You win! Rock beats scissors')
      humanScore += 1;
    } else if (computerChoice === 2) {
      console.log('It is a tie. Both chose rock')
    }
  }
}

const playGame = function() {
  for (let i=0; i<5; i++) {
    playRound(getHumanChoice(), getComputerChoice())
    console.log(`Current score - Player: ${humanScore} Computer: ${computerScore}`)
  }
  if (humanScore > computerScore) {
    console.log('You won the game!')
  } else if (humanScore < computerScore){
    console.log('You lost the game')
  } else {
    console.log('The game ends with a tie.')
  }
}
playGame()
