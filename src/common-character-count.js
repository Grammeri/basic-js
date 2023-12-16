const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2) {
  let count = 0;
  const s1Counts = {};
  const s2Counts = {};

  // Count the frequency of each character in s1
  for (let char of s1) {
    s1Counts[char] = (s1Counts[char] || 0) + 1;
  }

  // Count the frequency of each character in s2
  for (let char of s2) {
    s2Counts[char] = (s2Counts[char] || 0) + 1;
  }

  // Calculate the total number of common characters
  for (let char in s1Counts) {
    if (s2Counts[char]) {
      count += Math.min(s1Counts[char], s2Counts[char]);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
