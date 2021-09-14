/*

IF STATEMENT:

logikos sablonai
if () {}
if () {} else {}

palyginimo operatoriai:
-visi: >, <, >=, <=, ==, !=, ===,!==
-naudotini:>, <, >=, <=, ===,!==
-nenaudotini: ==, !=, (nes nera tikrinamas reiksmiu tipas (ar skaitinis(123) ar tekstinis(abc))

*/

const cookiesAgreed = false;

if (cookiesAgreed === false) {
    console.log('Ismetame cookies sutikimo bloka... 1');
}

if (!cookiesAgreed) {
    console.log('Ismetame cookies sutikimo bloka... 2');
}

console.log('-------------------');

const (userLoggedIn) = true;

if (userLoggedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}

