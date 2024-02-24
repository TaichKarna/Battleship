import { Ship } from "./ships";
import { Gameboard } from "./gameBoard";
import { Player, Computer } from "./player";
import { DomManipulation, dqs, createDiv } from "./domManupulation";

function checkWinner(playerBoard, opponentBoard) {
  if (playerBoard.allSunk()) {
    return "Computer";
  }
  if (opponentBoard.allSunk()) {
    return "Player";
  }
  return 0;
}

function getRandomPos(board, length) {
  const positions = [];
  while (positions.length !== 4) {
    const xPos = Math.floor(Math.random() * 9);
    const yPOs = Math.floor(Math.random() * 9);
    const axis = ["X", "Y"][Math.floor(Math.random() * 1)];
    const val = board[xPos][yPOs];

    if (val === 0 && axis === "X") {
      let col = yPOs;
      const occupiedCells = Array(length)
        .fill()
        // eslint-disable-next-line no-plusplus
        .map(() => [xPos, col++]);
      console.log(occupiedCells);
    }
  }
  return positions;
}

function placeShip(board) {
  const [xPos, yPos, orientation] = getRandomPos(board);
}

function gameLoop() {
  const computer = Computer();
  // gameboard
  const playerBoard = new Gameboard();
  const computerBoard = new Gameboard();

  computerBoard.placeShip(0, 0, "X", 3);
  computerBoard.placeShip(7, 1, "X", 2);
  computerBoard.placeShip(4, 8, "Y", 5);
  computerBoard.placeShip(3, 2, "Y", 3);
  computerBoard.placeShip(5, 6, "Y", 4);
  console.log(computerBoard.board);
  const playerBoardEle = dqs(".playerBoard");
  const compBoardEle = dqs(".computerBoard");
  const display = dqs(".display");

  DomManipulation.playerBoardRenderer(playerBoard.board, playerBoardEle);
  DomManipulation.opponentBoardRenderer(computerBoard.board, compBoardEle);

  let currentPlayer = "player";
  // eslint-disable-next-line no-loop-func
  compBoardEle.addEventListener("click", (event) => {
    if (
      currentPlayer === "player" &&
      !playerBoard.allSunk() &&
      !computerBoard.allSunk()
    ) {
      const cell = event.target;
      const [xPos, yPos] = DomManipulation.getPos(cell);
      computerBoard.receiveAttack(xPos, yPos);
      compBoardEle.replaceChildren();
      DomManipulation.opponentBoardRenderer(computerBoard.board, compBoardEle);
      display.textContent = "Computer Turn";
      currentPlayer = "computer";

      setTimeout(() => {
        const [xPos1, yPos1] = computer.attack(playerBoard);
        playerBoard.receiveAttack(xPos1, yPos1);
        playerBoardEle.replaceChildren();
        DomManipulation.playerBoardRenderer(playerBoard.board, playerBoardEle);
        display.textContent = "Your Turn";
        currentPlayer = "player";
      }, 0);
    }
    if (playerBoard.allSunk() || computerBoard.allSunk()) {
      display.textContent = `${checkWinner(playerBoard, computerBoard)} won`;
    }
  });
}

export { gameLoop };
