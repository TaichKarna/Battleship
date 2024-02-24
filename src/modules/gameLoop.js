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

function placeShipRandomly(board, length) {
  const xPos = Math.floor(Math.random() * 10);
  const yPos = Math.floor(Math.random() * 10);
  const axis = ["X", "Y"][Math.floor(Math.random() * 2)];

  let success = board.placeShip(xPos, yPos, axis, length);
  while (!success) {
    success = board.placeShip(xPos, yPos, axis, length);
  }
}

function gameLoop() {
  const computer = Computer();
  // gameboard
  const playerBoard = new Gameboard();
  const computerBoard = new Gameboard();

  const playerBoardEle = dqs("body >.boards >.playerBoard");
  const compBoardEle = dqs(".computerBoard");
  const display = dqs(".display");
  const dialog = dqs("#dialog-box");
  DomManipulation.playerBoardRenderer(playerBoard.board, playerBoardEle);
  DomManipulation.opponentBoardRenderer(computerBoard.board, compBoardEle);
  DomManipulation.dialogBoxCreator(playerBoard, dialog);

  placeShipRandomly(computerBoard, 2);
  placeShipRandomly(computerBoard, 3);
  placeShipRandomly(computerBoard, 2);
  placeShipRandomly(computerBoard, 1);

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

export { gameLoop, placeShipRandomly };
