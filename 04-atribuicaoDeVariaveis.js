console.log('-----------------------------------');

const nome = 'Mateus';
const sobrenome = 'Maciel';
const nomeCompleto = nome + ' ' + sobrenome;

// Utilização concatenação 01
console.log(
    'Nome: ' + nome + ' | Sobrenome: ' + sobrenome + ' | Nome Completo: ' + nomeCompleto);

console.log('-----------------------------------');

console.log(
    'Nome: '.concat(nome).concat(' | Sobrenome: ').concat(sobrenome).concat(' | Nome Completo: ').concat(nomeCompleto));
    
console.log('-----------------------------------');

// Utilizando Template String
console.log(
    `Nome: ${nome} | Sobrenome: ${sobrenome} | Nome Completo ${nomeCompleto}`
);

console.log('-----------------------------------');