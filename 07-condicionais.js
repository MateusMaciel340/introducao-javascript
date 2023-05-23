const listaDestino = ['Fortaleza', 'Quixadá', 'Horizonte', 'Chorozinho'];

const nomePessoa = 'Mateus';
const idadePessoa = 18;
const adultoAcompanhandoPessoa = true;
const temPassagem = false;

if (idadePessoa >= 18) {
    
    console.log('A pessoa é maior de idade');
} else if (adultoAcompanhandoPessoa === true) {
    
    console.log('A pessoa é menor de idade, mas está sendo acompanhada!');
} else {
    console.log('A pessoa é menor de idade');
}

console.log('-----------------------------------');

if (idadePessoa >= 18 && temPassagem === true) {
    console.log('Você é maior de idade e tem passagem!');
} else if (idadePessoa <= 17 && temPassagem === false) {
    console.log('Você é menor de idade e não tem passagem!');
} else {
    console.log('Ou você é menor de idade ou não tem passagem!');
}