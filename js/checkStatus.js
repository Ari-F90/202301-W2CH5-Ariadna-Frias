import { countCellsAlive } from "./cellsAlive.js";

export const checkStatus = (i, j, area) => {
  let myPosition = area[i][j];
  if (myPosition === 0 && countCellsAlive() === 3) {
    area[i][j] === 1;
  } else if (
    myPosition === 1 &&
    (countCellsAlive() < 2 || countCellsAlive() > 3)
  ) {
    area[i][j] === 0;
  }
};
