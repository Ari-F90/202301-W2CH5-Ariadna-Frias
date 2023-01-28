let state = 1;

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
