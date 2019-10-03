const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let letters = expr.match(/.{1,10}/g);
    let words5 = "";
    for (var i = 0; i < letters.length; i++) {
        let words = letters[i].match(/.{1,2}/g);

        function ff(e) {
            return (e != "00");
        }
        let words1 = words.filter(ff);
        let words2 = words1.join("");
        let words3 = words2.replace(/10/g, ".");
        let words4 = words3.replace(/11/g, "-");
        if (letters[i] !== "**********") {
            for (let key in MORSE_TABLE) {
                if (words4 == key) {
                    words5 += MORSE_TABLE[key];
                }
            }
        } else { words5 += " " }



    }


    return words5;
}


module.exports = {
    decode
}