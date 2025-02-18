

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