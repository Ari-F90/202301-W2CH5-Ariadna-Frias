import { createArea } from "./createArea.js";
const createArr = createArea(3, 3);
import { countCellsAlive } from "./cellsAlive.js";
describe("Given a function countCellsAlive", () => {
  describe("When we have two parameters for rows and columns and a bidimensional array", () => {
    test("Then if we define 3 rows and 3 columns, the function should return a number of cells", () => {
      const rows = 3;
      const cols = 3;
      const expected = "number";
      const r = typeof countCellsAlive(3, 3, createArr);
      expect(r).toBe(expected);
    });
  });
});

countCellsAlive(3, 3, createArr);
