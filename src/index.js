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
    let words5 = "";
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
        if (letters[i] !== "**********") {
            for (let key in MORSE_TABLE) {
                if (words4 == key) {
                    words5 += MORSE_TABLE[key];
                }
            }
        } else { words5 += " " }



    }
    console.log(words5);


}
const expr = "000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110";
decode(expr);

//var representation = str.replace(/([.-]+[-.]*)/g, (_, x) => dictionary[x]);
//console.log(representation);
//module.exports = {
// decode
//}