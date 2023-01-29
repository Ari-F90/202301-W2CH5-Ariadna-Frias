import { createArea } from "./createArea.js";
const createArr = createArea(3, 3);

export const countCellsAlive = (rows, cols, area) => {
  const i = 1;
  const j = 1;

  let cells = 0;

  cells += area[i - 1][j - 1];
  cells += area[i - 1][j];
  cells += area[i - 1][j + 1];
  cells += area[i][j - 1];
  cells += area[i][j + 1];
  cells += area[i + 1][j - 1];
  cells += area[i + 1][j];
  cells += area[i + 1][j + 1];

  return cells;
};

countCellsAlive(3, 3, createArr);
