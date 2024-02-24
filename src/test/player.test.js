import { Computer } from "../modules/player";
import { Gameboard } from "../modules/gameBoard";

test("Test for Computer Attack to not attack one block again and again", () => {
  const gameBoard = new Gameboard();
  const ai = Computer();

  const [x, y] = ai.attack(gameBoard);
  expect(gameBoard.board[x][y]).toBe(1);

  const [x1, y1] = ai.attack(gameBoard);
  expect(gameBoard.board[x1][y1]).toBe(1);
  const [x2, y2] = ai.attack(gameBoard);
  expect(gameBoard.board[x2][y2]).toBe(1);
  const [x3, y3] = ai.attack(gameBoard);
  expect(gameBoard.board[x3][y3]).toBe(1);
  const [x4, y4] = ai.attack(gameBoard);
  expect(gameBoard.board[x4][y4]).toBe(1);
});
