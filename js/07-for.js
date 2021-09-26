/*

FOR LOOP (ciklas):

for () {}

*/

const rytas = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let rytasIndex = 0;
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];

    console.log(zodis);

console.log('----------');


// Parasyti cikla, kurima isspaudinsiu skaicius nuo 3 iki 7 imtinai
for (let i = 3; i <= 7; i++) {
    console.log(i);
}

console.log('ciklo pabaiga');

console.log('-----------');

// Ejimas per sarasa:
const marks = [5, 7, 10, 4, 2, 10, 8, 9, 1, 3];

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

//Ejimas per sarasa:
const pazymiai = [ 3, 8, 5, 10, 1, 6, 3, 7];

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

console.log('-----------');

const abc = ['a', 'b', 'c', 'd'];

for ( let i = 0; i < abc.length; i++) {
    const raide = abc[i];

    console.log(raide);
}
