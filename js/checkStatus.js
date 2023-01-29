import { countCellsAlive, createArr } from "./cellsAlive.js";

export const checkStatus = (rows, cols, area) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let state = area[i][j];
      if (i !== rows - 1 || j !== cols - 1 || i !== -1 || j !== -1) {
        if (state === 0 && countCellsAlive() === 3) {
          state = 1;
        }

        if (state === 1 && (countCellsAlive() < 2 || countCellsAlive() > 3)) {
          state = 0;
        }
      }
    }
  }

  console.table(createArr);
};
