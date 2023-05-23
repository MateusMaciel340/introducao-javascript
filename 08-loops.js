const listaDestinos = ['Fortaleza', 'Pacajus', 'Quixadá', 'Horizonte'];
listaDestinos.push('Ibaretama');

const destinoEscolhido = 'Ibaretama';

let destinoExiste = false;
let contador = 0;

// Utilizando While
while (contador < listaDestinos.length) {
    
    if (listaDestinos[contador] === destinoEscolhido) {
        destinoExiste = true;
        break;
    }

    contador = contador + 1;
}

if (destinoEscolhido) {
    console.log(`${destinoEscolhido} é uma cidade oferecida pela nossa agência!`);
} else {
    console.log(`${destinoEscolhido} não é uma cidade oferecida pela nossa agência!`);
}

console.log('----------------------------------------------------------------');

// Utilizando For
for (let contadorFor = 0; contadorFor < listaDestinos.length; contadorFor++) {

    if (listaDestinos[contadorFor] === destinoEscolhido) {
        destinoExiste = true;
        break;
    }
}

if (destinoExiste) {
    console.log(`${destinoEscolhido} é uma cidade oferecida pela nossa agência!`);
} else {
    console.log(`${destinoEscolhido} não é uma cidade oferecida pela nossa agência!`);
}