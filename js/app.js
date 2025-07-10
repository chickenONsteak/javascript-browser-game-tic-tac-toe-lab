/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
function init() {
  board = ["", "X", "", "O", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  console.log(`${board}, ${turn}, ${winner}, ${tie}`);
  // function render();
}

// function render() {

// }

function updateBoard() {
  board.forEach((element, index) => {
    squareEls[index].innerText = element;
  });
}

function updateMessage() {
  if (winner === false && tie === false) {
    messageEl.innerText(`It's Player ${turn}'s turn!`);
  } else if (winner === false && tie === true) {
    messageEl.innerText("Y'all tied!");
  } else {
    messageEl.innerText(`Player ${turn} wins!`);
  }
}

/*----------------------------- Event Listeners -----------------------------*/
init();
updateBoard();
