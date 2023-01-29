import { countCellsAlive } from "./cellsAlive.js";

export const checkStatus = (i, j, area) => {
  let state = area[i][j];
  if (state === 0 && countCellsAlive() === 3) {
    state = 1;
  }

  if (state === 1 && (countCellsAlive() < 2 || countCellsAlive() > 3)) {
    state = 0;
  }
};
