const marks = [10, 8, 6, 4];

const count = marks.length;
let sum = 0;                
console.log('sum:', sum);

sum = sum + marks[0];       // 0 + 10
console.log('sum:', sum);

sum = sum + marks[1];        // 10 + 8
console.log('sum:', sum);

sum = sum + marks[2];        // 18 + 6
console.log('sum:', sum);

sum = sum + marks[3];       // 24 + 4
console.log('sum:', sum);

const average = sum / count; //vidurkis = suma / pazymiu kiekio
console.log(average);

console.log('------------');

const marks2 = [2, 4, 6, 8];

let sum2 = 0;
console.log(sum2);

sum2 = sum2 + marks2[0];
console.log('sum2:', sum2);

sum2 = sum2 + marks2[1];
console.log('sum2:', sum2);

sum2 = sum2 + marks2[2];
console.log('sum2:', sum2);

sum2 = sum2 + marks2[3];
console.log('sum2:', sum2);