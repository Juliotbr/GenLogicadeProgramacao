const leia = require('readline-sync');

let a = leia.questionInt("Digite o numero A: ");
let b = leia.questionInt("Digite o numero B: ");
let c = leia.questionInt("Digite o numero C: ");

let somaab = a + b;

if (somaab > c) {
    console.log("A soma de A e B é maior que C");
}
else if (somaab < c) {
    console.log("A soma de A e B é menor que C");
}
else {
    console.log("A soma de A e B é igual a C");
}
