const a = 8;
const b = 5;

const c = 99;
const d = 88;

const e = 54155;
const f = 89514;

// suma:
// const s = (a + b) * 10;
// console.log(s);

function desimteriopa_suma(pirmas, antras) {
    console.log(pirmas);
    console.log(antras);
}

desimteriopa_suma(a, b);
console.log('--------');
desimteriopa_suma(c, d);
console.log('--------');
desimteriopa_suma(e, f);


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