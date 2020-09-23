// HTML Elements
const statusDiv = document.querySelector(".status");
const resetDiv = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");

// game Variables
let gameIsLive = true;
let xIsNext = true;

//functioins
const checkGameStatus = () => {
  const topLeft = cellDivs[0].classList[1];
  const topMiddle = cellDivs[1].classList[1];
  const topRight = cellDivs[2].classList[1];
  const middleLeft = cellDivs[3].classList[1];
  const middleMiddle = cellDivs[4].classList[1];
  const middleRight = cellDivs[5].classList[1];
  const bottomLeft = cellDivs[6].classList[1];
  const Left = cellDivs[7].classList[1];
  const topLeft = cellDivs[8].classList[1];
};

//event handlers

const handlersReset = (e) => {
  console.log(e);
};

const handleCellClick = (e) => {
  const classList = e.target.classList;
  const location = e.target.classList[1];

  if (classList[2] === "x " || classList[2] === "o") {
    return;
  }

  if (xIsNext) {
    e.target.classList.add("x");
    xIsNext = !xIsNext;
  } else {
    e.target.classList.add("o");
    xIsNext = !xIsNext;
  }
};

//event listners

resetDiv.addEventListener("click", handlersReset);

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleCellClick);
}
