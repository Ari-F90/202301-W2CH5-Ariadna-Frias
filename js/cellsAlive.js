import { createArea } from "./createArea.js";
const createArr = createArea(3, 3);
export const countCellsAlive = (rows, cols, area) => {
  let cells = 0;
  const nextTo = area;

  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < cols - 1; j++) {
      if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
        nextTo[i][j] = area[i][j];
      }

      cells += area[i - 1][j - 1];
      cells += area[i - 1][j];
      cells += area[i - 1][j + 1];
      cells += area[i][j - 1];
      cells += area[i][j + 1];
      cells += area[i + 1][j - 1];
      cells += area[i + 1][j];
      cells += area[i + 1][j + 1];
    }
  }

  return cells;
};

countCellsAlive(4, 4, createArr);
