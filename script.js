//Calculadora

let num1 = Number(prompt("Digite um número: "));
    num2 = Number(prompt("Digite outro número: "));
    
let operacao = prompt(
`Escolha a operação:
1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão `
);

let resultado;

if (operacao === "1") {
  resultado = num1 + num2;
} else if (operacao === "2") {
  resultado = num1 - num2;
} else if (operacao === "3") {
  resultado = num1 * num2;
} else if (operacao === "4") {
  resultado = num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
} else {
  resultado = "Operação inválida";
}

console.log("Resultado",resultado);
