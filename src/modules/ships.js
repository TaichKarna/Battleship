class Ship {
  length;

  hitsCount;

  sunk;

  constructor(length) {
    this.length = length;
    this.hitsCount = 0;
    this.sunk = false;
  }

  hit() {
    this.hitsCount += 1;
  }

  isSunk() {
    return this.hitsCount === this.length;
  }
}

export { Ship };
