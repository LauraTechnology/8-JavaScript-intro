// 2.	panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// a.	pvz.: “abcdef” -> “fedcba”

/* 1 būdas */

const text = 'abcdef';
let reverse = '';
const masyvas = ['vienas', 'du', 3]
console.log(masyvas[1])

// for (let i = 0; i < text.length; i++) {
//     reverse = text[i] + reverse; /* reverse += text [i] 
// }



/* 2 būdas */

// for (let i = 0; i < text.length; i++) {
//     reverse += text[text.length - 1 - i];
// }
// 
// /* 3 būdas */
// 
// for (let i = text.length - 1; i >= 0; i--) {
//     reverse += text[i];
// }

/* 4 būdas */

for (let i = text.length; i > 0; i--) {
    console.log(i)
    console.log(reverse)
    reverse += text[i - 1];
}



console.log(text, '->', reverse);


sukurti masyva (sarasa/array) ir sukurti jam loop (cikla)