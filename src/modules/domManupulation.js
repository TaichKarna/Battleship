import { placeShipRandomly } from "./gameLoop";
import { Gameboard } from "./gameBoard";

function createDiv(className) {
  const div = document.createElement("div");
  div.setAttribute("class", `${className}`);
  return div;
}

function dqs(selector) {
  return document.querySelector(selector);
}

class DomManipulation {
  static playerBoardRenderer(board, parentElement) {
    board.forEach((element, rowIndex) => {
      const row = createDiv(`row_${rowIndex}`);

      element.forEach((cell, columnIndex) => {
        const column = createDiv(`column_${columnIndex}`);
        if (cell === 11) {
          column.classList.add("attacked");
        } else if (cell === 10) {
          column.classList.add("ship", "attacked");
        } else if (cell !== 0 && cell !== "X") {
          column.classList.add("ship");
        }
        row.appendChild(column);
      });
      parentElement.appendChild(row);
    });
  }

  static opponentBoardRenderer(board, parentElement) {
    board.forEach((element, rowIndex) => {
      const row = createDiv(`row_${rowIndex}`);

      element.forEach((cell, columnIndex) => {
        const column = createDiv(`column_${columnIndex}`);
        if (cell === 11) column.classList.add("attacked");
        if (cell === 10) column.classList.add("ship", "attacked");
        row.appendChild(column);
      });
      parentElement.appendChild(row);
    });
  }

  static getPos(element) {
    const yPos = +Array.from(element.classList)
      .filter((className) => className.startsWith("column"))[0]
      .split("_")[1];
    const xPos = +Array.from(element.parentElement.classList)
      .filter((className) => className.startsWith("row"))[0]
      .split("_")[1];
    return [xPos, yPos];
  }

  static dialogBoxCreator(playerBoard, dialog) {
    dialog.showModal();
    const boardEle = dqs("#dialog-box .boards .playerBoard");
    DomManipulation.playerBoardRenderer(playerBoard.board, boardEle);
    console.log(boardEle, dialog);
    const ships = [1, 2, 2, 3];

    let clicked = false;
    boardEle.addEventListener("click", () => {
      clicked ? (clicked = false) : (clicked = true);
    });

    boardEle.addEventListener("mouseover", (event) => {
      const { target } = event;
      target.style.backgroundColor = "pink";
    });
  }
}
export { DomManipulation, dqs, createDiv };
