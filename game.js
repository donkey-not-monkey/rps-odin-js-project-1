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

const gameboard = document.querySelector('#gameboard');

const playRound = function(humanChoice, computerChoice) {
  // convention => paper: 0, scissors: 1, rock: 2
  if (humanChoice === 'scissors') {
    if (computerChoice === 1) {
     gameboard.textContent = ('It is a tie. Both chose scissors')

    } else if (computerChoice === 0) {
      humanScore += 1;
      gameboard.textContent = (`You win! ${humanChoice} beats paper.`)
    } else if (computerChoice === 2) {
      gameboard.textContent = (`You lose! Scissors loses to rock`)
      computerScore += 1;
    }
  }
  else if (humanChoice === 'paper') {
    if (computerChoice === 0) {
     gameboard.textContent = ('It is a tie. Both chose paper')
    } else if (computerChoice === 1) {
      computerScore += 1;
      gameboard.textContent = ('You lose! Paper loses to scissors')
    } else if (computerChoice === 2) {
      humanScore += 1;
      gameboard.textContent = ('You win! Paper beats rock')
    }
  }
  else if (humanChoice === 'rock') {
    if (computerChoice === 0) {
      computerScore += 1;
      gameboard.textContent = ('You lose! Rock loses to paper')
    } else if (computerChoice === 1) {
      humanScore += 1;
      gameboard.textContent = ('You win! Rock beats scissors')
    } else if (computerChoice === 2) {
      gameboard.textContent = ('It is a tie. Both chose rock')
    }
  }
}

const rock = document.querySelector('#rock');
const paper = document.getElementById('paper');
const scissors = document.querySelector('#scissors');
const allThreeBtns = document.querySelectorAll('.rps-selection');

allThreeBtns.forEach((oneBtn) => {
  oneBtn.addEventListener('click', function(e) {
    const userChoice = e.target.textContent.toLowerCase();
    playRound(userChoice, getComputerChoice())
  })
})



// const playGame = function() {
//   for (let i=0; i<5; i++) {
//     playRound(getHumanChoice(), getComputerChoice())
//     console.log(`Current score - Player: ${humanScore} Computer: ${computerScore}`)
//   }
//   if (humanScore > computerScore) {
//     console.log('You won the game!')
//   } else if (humanScore < computerScore){
//     console.log('You lost the game')
//   } else {
//     console.log('The game ends with a tie.')
//   }
// }
