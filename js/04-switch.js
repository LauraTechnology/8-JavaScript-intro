/*

SWITCH STATEMENT

switch, case, break

*/

const animal = 'cat';

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

console.log('----------');

// Arbatos paruosimo logika
// su IF ELSE

const process = 4;

if (process === 1) {
    console.log('paimti puodeli');
} else if (process === 2) {
    console.log('isisdeti arbatos');
} else if (process === 3) {
    console.log('isideti saldikili');
} else if (process === 4) {
    console.log('ipilti vandens');
} else if (process === 5) {
    console.log('ismiasyti');
} else if (process === 6) {
    console.log('gerti');
}

// Arbatos paruosimo logika
// su SWITCH ( switch, stage, break)

switch (process) {
    case 1:
        console.log('paimti puodeli');
    case 2:
        console.log('isideti arbatos');
    case 3:
        console.log('isideti saldikli');
    case 4:
        console.log('ipilti vandens');
    case 5:
        console.log('ismaisyti');
    case 6:
        console.log('gerti');
        break;
        
    default:
        console.log('Tu turi puodelį karštos arbatos ;)');

}




































//switch (procesas) {
//    case 1:
//}
