console.log('-----------------------------------');

const primeiraCidade = 'São Paulo';
const segundaCidade = 'Rio de Janeiro';
const terceiraCidade = 'Fortaleza';

console.log(primeiraCidade, segundaCidade, terceiraCidade);

console.log('-----------------------------------');

const cidadesParaViajar = ['São Paulo', 'Rio de Janeiro', 'Fortaleza'];
console.log(cidadesParaViajar);

console.log('-----------------------------------');

cidadesParaViajar.push('Manaus');
console.log(cidadesParaViajar);

console.log('-----------------------------------');

for (let i = 0; i < cidadesParaViajar.length; i = i + 1) {
    console.log(i + ' -> ' + cidadesParaViajar[i]);
}

console.log('-----------------------------------');

cidadesParaViajar.splice(2, 1);
console.log(cidadesParaViajar);