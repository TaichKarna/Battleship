export { Player, Computer };

function Player(name) {
  const playerName = name;
  return { playerName };
}

function Computer() {
  const playerName = "Computer";

  function attack(enemyBoard) {
    const prevHitShip = false;
    const gameBoard = enemyBoard;
    if (!prevHitShip) {
      const xPos = Math.floor(Math.random() * 9);
      const yPos = Math.floor(Math.random() * 9);
      const val = gameBoard.board[xPos][yPos];

      if (val !== 10 && val !== 11) {
        return [xPos, yPos];
      }
      if (gameBoard.allSunk()) {
        return null;
      }
      return attack(gameBoard);
    }
  }
  return { playerName, attack };
}
