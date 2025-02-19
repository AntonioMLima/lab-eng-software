/*
3. Implemente um script JavaScript que solicite ao usuário um número inteiro 
positivo. Assim que o usuário digitar um valor válido calcule o fatorial do 
mesmo e exiba o resultado em uma janela de alerta.
*/

let numInteiro;
do{
    numInteiro = prompt("Insira um número:");
} while (isNaN(numInteiro) || numInteiro % 1 !== 0 || numInteiro < 0)

let fatorial = numInteiro > 1 ? numInteiro : 1 ;

for (i = numInteiro; i >= 2; i--) {
    fatorial *= i - 1;
}

alert( numInteiro + "!" + " é " + fatorial);
