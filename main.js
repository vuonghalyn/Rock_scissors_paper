// Global stage section
// const modalScreen = document.querySelector("#letsPlay");

const resultText = document.querySelector("#announcement");

const scoreEachRound = [];

let isUserLosing = false;
let isComputerLosing = false;

const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");

// Random Number
// Scoring
// Display the result

// modalScreen.onclick = () => {
//   div.fadeOut;
// };

// Start game by pushing Let's Play
const game = () => {
  let userScore = 0;
  const userScoreDisplay = document.querySelector("#currentUserScore");

  let computerScore = 0;
  const computerScoreDisplay = document.querySelector("#currentComputerScore");

  const startingGame = () => {
    const playButtonHandler = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButtonHandler.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  startingGame();
  // get User Choice
  const startGame = (event) => {
    let userRoundResult;
    let userChoice = event.target.id;
    if (userChoice == "rock") {
      userChoice = 0;
      playerHand.src = "./Assets/rock.png";
    } else if (userChoice == "paper") {
      userChoice = 1;
      playerHand.src = "./Assets/paper.png";
    } else {
      userChoice = 2;
      playerHand.src = "./Assets/scissors.png";
    }

    // get Computer Choice
    // 0 = rock
    // 1 = paper
    // 2 = scissors
    const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
      computerHand.src = "./Assets/rock.png";
    } else if (computerChoice == 1) {
      computerHand.src = "./Assets/paper.png";
    } else {
      computerHand.src = "./Assets/scissors.png";
    }

    // Compare result each round and plus score for the winner
    if (userChoice == 0 && computerChoice == 2) {
      console.log("Result: Player Win with Rock");
      userScore++;
      resultText.innerHTML = "You win";
      userRoundResult = "win";
      console.log(userScore);
      scoreEachRound.push({
        userScore: userScore,
        computerScore: computerScore,
      });
      console.log(scoreEachRound);
    } else if (userChoice == 1 && computerChoice == 0) {
      console.log("Result: Player Win with Paper");
      userScore++;
      resultText.innerHTML = "You win";
      console.log(userScore);
      console.log(scoreEachRound);
      userRoundResult = "win";

      scoreEachRound.push({
        userScore: userScore,
        computerScore: computerScore,
        userRoundResult: userRoundResult,
      });
    } else if (userChoice == 2 && computerChoice == 1) {
      console.log("Result: Player Win with Scissors");
      userScore++;
      resultText.innerHTML = "You win";
      console.log(userScore);
      console.log(scoreEachRound);
      userRoundResult = "win";

      scoreEachRound.push({
        userScore: userScore,
        computerScore: computerScore,
        userRoundResult: userRoundResult,
      });
    } else if (userChoice == computerChoice) {
      console.log("Draw");
      resultText.innerHTML = "Draw";
      userRoundResult = "draw";

      console.log(scoreEachRound);

      scoreEachRound.push({
        userScore: userScore,
        computerScore: computerScore,
        userRoundResult: userRoundResult,
      });
    } else {
      console.log("You lose");
      computerScore++;
      resultText.innerHTML = "You lose";
      console.log(computerScore);

      console.log(scoreEachRound);
      userRoundResult = "lose";

      scoreEachRound.push({
        userScore: userScore,
        computerScore: computerScore,
        userRoundResult: userRoundResult,
      });
    }

    //dislay score to the game
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;

    //check if 3 win in a row or 3 lose in a row
    if (scoreEachRound.length >= 3) {
      console.log(scoreEachRound[scoreEachRound.length - 1].userRoundResult);
      console.log(scoreEachRound[scoreEachRound.length - 2].userRoundResult);
      console.log(scoreEachRound[scoreEachRound.length - 3].userRoundResult);
      console.log(
        scoreEachRound[scoreEachRound.length - 1].userRoundResult ==
          scoreEachRound[scoreEachRound.length - 2].userRoundResult &&
          scoreEachRound[scoreEachRound.length - 2].userRoundResult ==
            scoreEachRound[scoreEachRound.length - 3].userRoundResult &&
          scoreEachRound[scoreEachRound.length - 1].userRoundResult == "win"
      );
      console.log(
        scoreEachRound[scoreEachRound.length - 1].userRoundResult ==
          scoreEachRound[scoreEachRound.length - 2].userRoundResult &&
          scoreEachRound[scoreEachRound.length - 2].userRoundResult ==
            scoreEachRound[scoreEachRound.length - 3].userRoundResult &&
          scoreEachRound[scoreEachRound.length - 1].userRoundResult == "lose"
      );
      if (
        scoreEachRound[scoreEachRound.length - 1].userRoundResult ==
          scoreEachRound[scoreEachRound.length - 2].userRoundResult &&
        scoreEachRound[scoreEachRound.length - 2].userRoundResult ==
          scoreEachRound[scoreEachRound.length - 3].userRoundResult &&
        scoreEachRound[scoreEachRound.length - 1].userRoundResult == "win"
      ) {
        console.log("user win whole game with 3 straight win");
      }
      if (
        scoreEachRound[scoreEachRound.length - 1].userRoundResult ==
          scoreEachRound[scoreEachRound.length - 2].userRoundResult &&
        scoreEachRound[scoreEachRound.length - 2].userRoundResult ==
          scoreEachRound[scoreEachRound.length - 3].userRoundResult &&
        scoreEachRound[scoreEachRound.length - 1].userRoundResult == "lose"
      ) {
        console.log("user lose whole game with 3 straight lost");
      }

      // if (
      //   scoreEachRound[i].userScore == scoreEachRound[i - 1].userScore &&
      //   scoreEachRound[i].computerScore == scoreEachRound[i - 1].computerScore
      // ) {
      //   isUserLosing = false;
      //   isComputerLosing = false;
      //   break;
      // }
      // if (scoreEachRound[i].userScore == scoreEachRound[i - 1].userScore) {
      //   isUserLosing = true;
      // } else {
      //   isUserLosing = false;
      //   break;
      // }

      // if (
      //   scoreEachRound[i].computerScore == scoreEachRound[i - 1].computerScore
      // ) {
      //   isComputerLosing = true;
      // } else {
      //   isComputerLosing = false;
      //   break;
      // }
      // console.log("run");

      console.log(isComputerLosing);
      console.log(isUserLosing);

      //check who gets to 10 points first
      if (userScore == 10 && computerScore <= 10) {
        console.log("Compare 10 points: user win whole game");
      }
      if (userScore <= 10 && computerScore == 10) {
        console.log("Compare 10 points: user lose whole game");
      }
    }
  };
};
game();
startGame();

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", startGame);

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", startGame);

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", startGame);
