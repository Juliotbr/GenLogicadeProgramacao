const leia = require('readline-sync');

const numero = leia.questionInt("Digite um número inteiro: ", {
  limitMessage: 'Por favor, insira um número inteiro válido.'
});

let verificapar;
  if (numero % 2 === 0) {
    verificapar = "par";
  } else {
    verificapar = "ímpar";
  }

let verificapositivo;
  if (numero > 0) {
  verificapositivo = "positivo";
    }
  else {
    verificapositivo = "negativo";
  }
console.log(`O número ${numero} é ${verificapar} e ${verificapositivo}.`);
