/*

SWITCH STATEMENT

switch, case, break

*/

const animal = 'dog';

switch (animal) {
    case 'dog':
        console.log('Bark bark');
        break;

    case 'cat':
        console.log('Meow meow');
        break; 

    default:
        console.log('Unknown animal');
        break;
}

if (animal === 'dog') {
    console.log('Bark bark');
} else if (animal === 'cat') {
    console.log('Meow meow');
} else {
    console.log('Unknown animal');
}
