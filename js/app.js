/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
squareEls.forEach((square) => square.addEventListener("click", handleClick));

/*-------------------------------- Functions --------------------------------*/
function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
}

function render() {
  updateBoard();
  updateMessage();
}

function updateBoard() {
  board.forEach((element, index) => {
    squareEls[index].innerText = element;
  });
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.innerText = `It's Player ${turn}'s turn!`;
  } else if (winner === false && tie === true) {
    messageEl.innerText = "Y'all tied!";
  } else {
    messageEl.innerText = `Player ${turn} wins!`;
  }
  return;
}

function handleClick(event) {
  const squareIndex = event.target.id;
  if (board[squareIndex] !== "") {
    return;
  } else {
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
  }
}

function placePiece(index) {
  if (winner === false && tie === false) {
    board[index] = turn;
    squareEls[index].innerText = turn;
  } else {
    return;
  }
}

function checkForWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (
      board[winningCombos[i][0]] !== "" &&
      board[winningCombos[i][0]] === board[winningCombos[i][1]] &&
      board[winningCombos[i][0]] === board[winningCombos[i][2]]
    ) {
      winner = true;
      return;
    }
  }
}

function checkForTie() {
  if (!board.includes("")) {
    tie = true;
  } else {
    tie = false;
  }
}

function switchPlayerTurn() {
  if (winner === false) {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }
}

init();
updateBoard();

/*----------------------------- Event Listeners -----------------------------*/
const resetBtnEl = document.querySelector("#reset");
resetBtnEl.addEventListener("click", init);
