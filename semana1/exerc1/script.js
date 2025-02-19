/**
1. Implemente um script JavaScript que solicite ao usuário um número inteiro 
positivo. Assim que o usuário digitar um valor válido informe em uma janela 
de alerta se o número é par ou ímpar. 
*/

let numInteiro;
do{
    numInteiro = prompt("Insira um número:");
} while (isNaN(numInteiro) || numInteiro % 1 !== 0 || numInteiro < 0)

let isPar = numInteiro % 2 == 0;

if (isPar) {
    alert("O número " + numInteiro + " é par");
} else {
    alert("O número " + numInteiro + " é impar");
}