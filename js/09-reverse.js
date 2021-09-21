// 2.	panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// a.	pvz.: “abcdef” -> “fedcba”

const text = 'abcdef';
let reverse = '';

for (let i = 0; i < text.length; i++) {
    reverse = text[i] + reverse; /* reverse += text [i] */
}

console.log(text, '->', reverse);