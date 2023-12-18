const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    if (!Array.isArray(arr)) {
      throw new Error('arr must be an instance of the Array!');
    }


    if (arr.every(element => !Array.isArray(element))) {
      return 1;
    }


    let depths = arr.map(element => Array.isArray(element) ? 1 + this.calculateDepth(element) : 1);


    return Math.max(...depths);
  }
}

module.exports = {
  DepthCalculator
};
