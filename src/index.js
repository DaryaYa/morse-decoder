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
    console.log(letters);

    for (var i = 0; i < letters.length; i++) {
        let words = letters[i].match(/.{1,2}/g);

        function ff(e) {
            return (e != "00");
        }
        let words1 = words.filter(ff);
        console.log(words1);
        let words2 = words1.join("");
        let words3 = words2.replace(/10/g, ".");
        let words4 = words3.replace(/11/g, "-");
        console.log(words4);
    }


}
const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
decode(expr);

//var representation = str.replace(/([.-]+[-.]*)/g, (_, x) => dictionary[x]);
//console.log(representation);
//module.exports = {
// decode
//}