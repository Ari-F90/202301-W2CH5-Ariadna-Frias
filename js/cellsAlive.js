import { createArea } from "./createArea.js";
export const createArr = createArea(3, 3);

export const countCellsAlive = (rows, cols, area) => {
  let cells = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i !== rows - 1 || j !== cols - 1 || i !== -1 || j !== -1) {
        if (area[i][j] === 1) {
          cells++;
        }
      }
    }
  }

  console.log(cells);

  return cells;
};
