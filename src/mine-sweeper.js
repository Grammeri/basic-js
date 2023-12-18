const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix ) {
  let result = matrix.map(row => row.map(val => val ? 1 : 0));

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x]) continue;


      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          let ny = y + dy;
          let nx = x + dx;

          if (ny >= 0 && ny < matrix.length && nx >= 0 && nx < matrix[y].length) {
            result[y][x] += matrix[ny][nx] ? 1 : 0;
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
