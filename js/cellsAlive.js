import { createArea } from "./createArea.js";

export const countCellsAlive = (rows, cols, area) => {
  const i = rows;
  const j = cols;
  const cellsNextTo = [
    area[i][j - 1],
    area[i - 1][j - 1],
    area[i - 1][j],
    area[i - 1][j + 1],
    area[i][j + 1],
    area[i + 1][j + 1],
    area[i + 1][j],
    area[i + 1][j - 1],
  ];
  let cells = 0;
  if (cellsNextTo.some((el) => el === 1)) {
    cells++;
  }

  return cells;
};

countCellsAlive(3, 3, createArea(3, 3));
