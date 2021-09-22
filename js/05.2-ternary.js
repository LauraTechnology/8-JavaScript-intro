// Here is an example of code that could be shortened with the conditional operator:

// var userType;
// 
// 
// 
// if (userIsYoungerThan18) {
//   userType = "Minor";
// } else {
//   userType = "Adult";
// }
// 

 
// if (userIsYoungerThan21) {
//   serveDrink("Grape Juice");
// } else {
//   serveDrink("Wine");
// }


const pirmadienis = 1;
const penktadienis = 5;
/* siandien treciadienis */

let kada = '';

if ( pirmadienis > penktadienis) {
    kada = 'vėliau';
} else {
    kada = 'anksčiau';
}

console.log(kada);

console.log('------------');

const pienas = 2;
const duona = 1;

const pirkiniai = pienas > duona ? 'nepirksiu' : 'pirksiu';

console.log(pirkiniai);