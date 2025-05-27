const leia = require('readline-sync');

console.log("Bem-vindo à lanchonete!");
console.log("Código | Produto         | Preço Unitário");
console.log("  1    | Cachorro Quente | R$ 10.00");
console.log("  2    | X-Salada        | R$ 15.00");
console.log("  3    | X-Bacon         | R$ 18.00");
console.log("  4    | Bauru           | R$ 12.00");
console.log("  5    | Refrigerante    | R$  8.00");
console.log("  6    | Suco de laranja | R$ 13.00");

const codigoProduto = leia.questionInt("Digite o Código do Produto (1-6): ");
const quantidade = leia.questionInt("Digite a Quantidade: ");

let nomeProduto = "";
let precoUnitario = 0;

if (quantidade < 0) {
  console.log("\nSAÍDA:");
  console.log("Quantidade inválida. Deve ser um número inteiro maior ou igual a zero.");
} else {
  switch (codigoProduto) {
    case 1:
        nomeProduto = "Cachorro Quente";
        precoUnitario = 10.00;
        const valorTotal1 = quantidade * precoUnitario;
        console.log(`Produto: ${nomeProduto}`);
        console.log(`Valor total: R$ ${valorTotal1.toFixed(2)}`);
        break;
    case 2:
        nomeProduto = "X-Salada";
        precoUnitario = 15.00;
        const valorTotal2 = quantidade * precoUnitario;
        console.log(`Produto: ${nomeProduto}`);
        console.log(`Valor total: R$ ${valorTotal2.toFixed(2)}`);
        break;
    case 3:
        nomeProduto = "X-Bacon";
        precoUnitario = 18.00;
        const valorTotal3 = quantidade * precoUnitario;
        console.log(`Produto: ${nomeProduto}`);
        console.log(`Valor total: R$ ${valorTotal3.toFixed(2)}`);
        break;
    case 4:
        nomeProduto = "Bauru";
        precoUnitario = 12.00;
        const valorTotal4 = quantidade * precoUnitario;
        console.log(`Produto: ${nomeProduto}`);
        console.log(`Valor total: R$ ${valorTotal4.toFixed(2)}`);
        break;
    case 5:
        nomeProduto = "Refrigerante";
        precoUnitario = 8.00;
        const valorTotal5 = quantidade * precoUnitario;
        console.log(`Produto: ${nomeProduto}`);
        console.log(`Valor total: R$ ${valorTotal5.toFixed(2)}`);
        break;
    case 6:
        nomeProduto = "Suco de laranja";
        precoUnitario = 13.00;
        const valorTotal6 = quantidade * precoUnitario;
        console.log(`Produto: ${nomeProduto}`);
        console.log(`Valor total: R$ ${valorTotal6.toFixed(2)}`);
        break;
    default:
        console.log("Código de produto inválido!");
        break;
  }
}