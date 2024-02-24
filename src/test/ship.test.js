/* eslint-disable no-undef */
import { Ship } from "../modules/ships";

const ship = new Ship(4);

test("Ship objest test for sunk and hit function", () => {
  ship.hit();
  expect(ship.hitsCount).toBe(1);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
