import { createArea } from "./createArea.js";

describe("Given a function createArea", () => {
  describe("When we have two parameters for rows and columns", () => {
    test("Then if we define 3 rows and 3 columns,it should appear 9 random numbers", () => {
      const rows = 3;
      const cols = 3;
      const expected = "number";
      const r = typeof createArea(rows, cols)[0][0];
      expect(r).toBe(expected);
    });
  });
});

createArea(3, 3);
