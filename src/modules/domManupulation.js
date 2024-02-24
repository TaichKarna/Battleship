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
        } else if (cell !== 0) {
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
}
export { DomManipulation, dqs, createDiv };
