const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Incorrect arguments!');
        }
        return this.process(message, key, 'encrypt');
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error('Incorrect arguments!');
        }
        return this.process(encryptedMessage, key, 'decrypt');
    }

    process(text, key, mode) {
        const keyLength = key.length;
        const aCode = 'A'.charCodeAt(0);
        const alphabetSize = 26;

        let processedText = '';
        let keyIndex = 0;

        for (const char of text.toUpperCase()) {
            if (char >= 'A' && char <= 'Z') {
                const shift = key[keyIndex % keyLength].toUpperCase().charCodeAt(0) - aCode;
                const charCode = char.charCodeAt(0) - aCode;

                if (mode === 'encrypt') {
                    processedText += String.fromCharCode(aCode + (charCode + shift) % alphabetSize);
                } else { // decrypt mode
                    processedText += String.fromCharCode(aCode + (charCode - shift + alphabetSize) % alphabetSize);
                }
                keyIndex++;
            } else {
                processedText += char;
            }
        }

        return this.direct ? processedText : processedText.split('').reverse().join('');

    }
}

module.exports = {
    VigenereCipheringMachine
};
