import { createArea } from "./tools.js";
describe("Given a function createArea", () => {
  describe("When we have two parameters for rows and columns", () => {
    test("Then if we define 3 rows and 3 columns,it should appear nine random numbers", () => {
      const rows = 3;
      const cols = 3;
      const expected = console.table(createArea(rows,cols);
      const r = createArea(rows, cols);
      expect(r).toBe(expected);
    });
  });
});

createArea(3, 3);
