import { Gameboard } from "../modules/gameBoard";
import { Ship } from "../modules/ships";

describe("test for game board object in X orientation", () => {
  const gameBoard = new Gameboard();
  const ship = gameBoard.placeShip(5, 5, "X", 3);
  test("", () => {
    expect(ship.hitsCount).toBe(0);
    gameBoard.receiveAttack(5, 7);
    expect(ship.hitsCount).toBe(1);
    gameBoard.receiveAttack(0, 0);
    expect(gameBoard.board[0][0]).toBe(1);
  });
});

describe("test for game board object in Y orientation", () => {
  const gameBoard = new Gameboard();
  const ship = gameBoard.placeShip(0, 8, "Y", 4);
  const ship1 = gameBoard.placeShip(0, 0, "X", 4);

  test("", () => {
    expect(ship.hitsCount).toBe(0);
    gameBoard.receiveAttack(3, 8);
    expect(ship.hitsCount).toBe(1);
    gameBoard.receiveAttack(4, 8);
    expect(gameBoard.board[4][8]).toBe(1);
    expect(gameBoard.allSunk()).toBe(false);
    gameBoard.receiveAttack(1, 8);
    gameBoard.receiveAttack(2, 8);
    gameBoard.receiveAttack(0, 8);
    expect(gameBoard.allSunk()).toBe(false);
  });
});
