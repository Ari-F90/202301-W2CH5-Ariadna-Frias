export const createArea = (rows, cols) => {
  const area = [];
  let count = 0;
  const random = () => Math.floor(Math.random() * 2);

  for (let i = 0; i < rows; i++) {
    area[i] = [];

    for (let j = 0; j < cols; j++) {
      area[i][j] = random();
      count++;
    }
  }

  console.table(area);
  return count;
};

export const countCellsAlive = (rows, cols, area) => {
  const rows = i;
  const cols = j;
  let cell = area[i][j];
  let cellsNextTo = [
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
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (cellsNextTo.some((el) => el === 1)) {
        cells++;
        return true;
      }
      if ([i - 1] === 0 || [j - 1] === 0 || [i + 1] === 4 || [j + 1] === 4) {
        return false;
      }
    }
  }
};
