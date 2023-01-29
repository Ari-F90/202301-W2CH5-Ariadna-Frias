import { createArea } from "./js/createArea.js";

import { countCellsAlive } from "./js/cellsAlive.js";
import { checkStatus } from "./js/checkStatus.js";

const createArr = createArea(3, 3);

countCellsAlive(3, 3, createArr);
checkStatus(3, 3, createArr);
