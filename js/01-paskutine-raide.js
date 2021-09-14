console.log('-------------------');

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

//Is mums zinomos 6 raidziu abeceles paskutine yra "f".
const abcIlgis = abc.length;



const paskutinesRaidesPozicija = abcIlgis - 1;
const paskutineRaide = abc[paskutinesRaidesPozicija];

const abcAtsakymas = 'Is mums zinomos ' + abcIlgis + ' raidziu abeceles paskutine yra "' + paskutineRaide + '"';
console.log(abcAtsakymas);

console.log('-------------------');