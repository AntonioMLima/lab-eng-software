let numInteiro;
do{
    numInteiro = prompt("Insira um número:");
} while (isNaN(numInteiro) || numInteiro % 1 !== 0 || numInteiro < 0)

let isPrimo = numInteiro > 1;


for (i = 2; i <= numInteiro/2 && isPrimo ; i++) {
    if (numInteiro % i == 0) {
        isPrimo = false;
    }
}

if (isPrimo) {
    alert( numInteiro + " é um número primo")
} else {
    alert( numInteiro + " não é um número primo")
}