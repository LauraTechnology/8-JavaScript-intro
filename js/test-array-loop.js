// sukurti masyva (sarasa/array) ir sukurti jam loop (cikla)
const savaite = ['Prd', 'And', 'Trd', 'Ktd', 'Ptd', 'Štd', 'Skd'];

console.log(savaite);
console.log(savaite[1]);
console.log(savaite[5]);


// for (let i = 0; i <savaite.length; i++) {
//     console.log(savaite[i]);
// }

let reverse = '';

 for (let i = 0; i < savaite.length; i++) {
     reverse += savaite[savaite.length - 1 - i];
 }
 console.log(savaite, '->', reverse);