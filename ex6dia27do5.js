const leia = require('readline-sync');

const nomeColaborador = leia.question("Nome do Colaborador: ");
const codigoCargo = leia.questionInt("Código do Cargo (1-6): ");
const salarioAtual = leia.questionFloat("Salário atual: R$ ");

let nomeCargo = "";
let percentualReajuste = 0;
let novoSalario = 0;

switch (codigoCargo) {
    case 1:
        nomeCargo = "Gerente";
        percentualReajuste = 0.10;
        novoSalario = salarioAtual * (1 + percentualReajuste);
        console.log(`Nome do Colaborador: ${nomeColaborador}`);
        console.log(`Cargo: ${nomeCargo}`);
        console.log(`Salário Reajustado: R$ ${novoSalario.toFixed(2)}`);
        break;
    case 2:
        nomeCargo = "Vendedor";
        percentualReajuste = 0.07;
        novoSalario = salarioAtual * (1 + percentualReajuste);
        console.log(`Nome do Colaborador: ${nomeColaborador}`);
        console.log(`Cargo: ${nomeCargo}`);
        console.log(`Salário Reajustado: R$ ${novoSalario.toFixed(2)}`);
        break;
    case 3:
        nomeCargo = "Supervisor";
        percentualReajuste = 0.09;
        novoSalario = salarioAtual * (1 + percentualReajuste);
        console.log(`Nome do Colaborador: ${nomeColaborador}`);
        console.log(`Cargo: ${nomeCargo}`);
        console.log(`Salário Reajustado: R$ ${novoSalario.toFixed(2)}`);
        break;
    case 4:
        nomeCargo = "Motorista";
        percentualReajuste = 0.06;
        novoSalario = salarioAtual * (1 + percentualReajuste);
        console.log(`Nome do Colaborador: ${nomeColaborador}`);
        console.log(`Cargo: ${nomeCargo}`);
        console.log(`Salário Reajustado: R$ ${novoSalario.toFixed(2)}`);
        break;
    case 5:
        nomeCargo = "Estoquista";
        percentualReajuste = 0.05;
        novoSalario = salarioAtual * (1 + percentualReajuste);
        console.log(`Nome do Colaborador: ${nomeColaborador}`);
        console.log(`Cargo: ${nomeCargo}`);
        console.log(`Salário Reajustado: R$ ${novoSalario.toFixed(2)}`);
        break;
    case 6:
        nomeCargo = "Técnico de TI";
        percentualReajuste = 0.08;
        novoSalario = salarioAtual * (1 + percentualReajuste);
        console.log(`Nome do Colaborador: ${nomeColaborador}`);
        console.log(`Cargo: ${nomeCargo}`);
        console.log(`Salário Reajustado: R$ ${novoSalario.toFixed(2)}`);
        break;
    default:
        console.log(`Nome do Colaborador: ${nomeColaborador}`);
        console.log("Código de Cargo inválido.");
        break;
}