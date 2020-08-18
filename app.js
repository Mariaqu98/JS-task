// set up some vars and add the ability to click a square and show a figure
// logic to Determine winner
// Basic AI and notify who is the winner
// suggested method :  minimax algorthims
// using DOM instead of jQuery
// Couldn't complete because am not that good with ai , it was the second try for me with ai , i need more time to build it as i wanted , but i enjoyeed it ! thank you

var iniBoard; // >> Array
const user = "O";
const computer = "X";

// array for the winning Combos
const winCombos = [
  // Vertical
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Horizontal

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal

  [0, 4, 8],
  [6, 4, 2],
];

// to store a reference to each cell in the tabel
const cells = document.querySelectorAll(".cell");

// this function will be called each time the page is uploaded and when the "Again" button clicked
startGame();

function startGame() {
  // to set the style of finishing to none again when ever the game replayed
  document.querySelector(".finishing").style.display = "none";
  iniBoard = Array.from(Array(9).keys());
  // to clear the "X" , "O" from the tabel
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    // to remove the background color that showed up when the user win or lose
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick, false);
  }
}

// to detrmine which element user clicked and the turn between the computer and the user

function turnClick(square) {
  if (typeof iniBoard[square.target.id] == "number") {
    turn(square.target.id, user);
    if (!checkWin(iniBoard, user) && !checkTie()) turn(bestSpot(), computer);
  }
}

function turn(squareId, player) {
  iniBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  let gameWon = checkWin(iniBoard, player);
  if (gameWon) gameOver(gameWon);
}

// to chick the winner
