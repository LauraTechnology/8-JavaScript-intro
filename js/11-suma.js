const a = 2;
const b = 4;

const c = 3;
const d = 6;

const e = 8;
const f = 5;

function skaicius(pirmas, antras) {
    console.log(pirmas);
    console.log(antras);
}



console.log('---------');

//f(x) = x*x;

function kvadratu(x) {
    console.log(x * x);
}

kvadratu(5)
kvadratu(55)
kvadratu(543)


console.log('---------');

function labas(vardas, amzius, vietovardis) {
    console.log(`Labas, as esu ${vardas}, man ${amzius} metai ir gyvenu ${vietovardis}.`);
}
 
labas('Petras', 88, 'vilniuje');
labas('Maryte', 77, 'Kaune');
labas('Alphe', 5, 'namie');