const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink( position) {
    if (typeof position !== 'number' || position < 1 || position > this.chain.length) {
      this.chain = []; // очистка цепи в случае ошибки
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishedChain = this.chain.join('~~');
    this.chain = []; // очистка цепи после завершения
    return finishedChain;
  }
};

module.exports = {
  chainMaker
};
