import { Ship } from "./ships";

class Gameboard {
  constructor() {
    this.board = Array(10)
      .fill()
      .map(() => Array(10).fill(0));
    this.shipsList = [];
  }

  blockAdjacentSide(xPos, yPos) {
    const adjacentPosition = [
      [xPos + 1, yPos],
      [xPos - 1, yPos],
      [xPos, yPos + 1],
      [xPos, yPos - 1],
      [xPos + 1, yPos + 1],
      [xPos - 1, yPos + 1],
      [xPos - 1, yPos - 1],
      [xPos + 1, yPos - 1],
    ];
    adjacentPosition
      .filter(
        (element) =>
          element[0] >= 0 &&
          element[0] <= 9 &&
          element[1] >= 0 &&
          element[1] <= 9 &&
          this.board[element[0]][element[1]] === 0,
      )
      .forEach((element) => {
        this.board[element[0]][element[1]] = "X";
      });
  }

  placeShip(row, column, axis, shipLength) {
    const shipObj = new Ship(shipLength);
    this.shipsList.push(shipObj);
    const index = this.shipsList.indexOf(shipObj) + 1;

    if (axis === "X") {
      for (let i = column; i < column + shipLength; i += 1) {
        this.board[row][i] = index;
        this.blockAdjacentSide(row, i);
      }
    } else {
      for (let i = row; i < row + shipLength; i += 1) {
        this.board[i][column] = index;
        this.blockAdjacentSide(i, column);
      }
    }
    return shipObj;
  }

  receiveAttack(xPos, yPos) {
    const cell = this.board[xPos][yPos];

    if (cell === 0) {
      this.board[xPos][yPos] = 11;
    } else {
      const ship = this.shipsList[cell - 1];
      ship.hit();
      this.board[xPos][yPos] = 10;
    }
  }

  allSunk() {
    return this.shipsList.every((ship) => ship.isSunk());
  }
}

export { Gameboard };
