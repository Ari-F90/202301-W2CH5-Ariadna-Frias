import { countCellsAlive } from "./cellsAlive.js";
import { createArr } from "./cellsAlive.js";

export const checkStatus = (rows, cols, area) => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const state = area[i][j];
      if (i !== rows || j !== cols || i !== -1 || j !== -1) {
        if (state === 0 && countCellsAlive(rows, cols, createArr) === 3) {
          area[i][j] = 1;
        }

        if (
          state === 1 &&
          (countCellsAlive(rows, cols, createArr) < 2 ||
            countCellsAlive(rows, cols, createArr) < 3)
        ) {
          area[i][j] = 0;
        }
      }
    }
  }

  console.table(createArr);
};
