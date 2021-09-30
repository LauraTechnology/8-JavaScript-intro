const text = 'abcdefg';
let reverse = '';

//for (let i = 0; i < text.length; i++) {
//    reverse = reverse + text[text.length - 1 - i];
//}




for (let i = 0; i < text.length; i++) {
    reverse = text[i] + reverse;

}

console.log(reverse);

console.log(text, '->', reverse);