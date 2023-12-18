const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Установка значений по умолчанию для параметров
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator !== undefined ? options.separator : '+';
  const addition = options.addition !== undefined ? options.addition : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  // Создание дополнения
  let additionStr = new Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator);

  // Создание основной строки с дополнением и разделителем
  return new Array(repeatTimes).fill(String(str) + additionStr).join(separator);
}

module.exports = {
  repeater
};
