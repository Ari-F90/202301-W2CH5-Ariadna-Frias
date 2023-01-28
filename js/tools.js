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

/*export const cellAside = () => {
  if ([i - 1] === -1 || [j - 1] === -1 || [i + 1] === 3 || [j + 1] === 3) {
    cellAside();
  }
  if [i][j] === 0
};*/
