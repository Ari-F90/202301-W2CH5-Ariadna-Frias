let state = 1;

export const createArea = (rows, cols) => {
  const area = [];
  const random = () => Math.floor(Math.random() * 2);

  for (let i = 0; i < rows; i++) {
    area[i] = [];

    for (let j = 0; j < cols; j++) {
      area[i][j] = random();
    }
  }

  console.table(area);
  return area;
};
