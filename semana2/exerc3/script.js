


function verificarPalindromo(frase) {
    let isPalindromo = true;
    let inicio = 0;
    fraseSemEspacos = frase.replace(/\s/g, '').toLowerCase();;
    let fim = fraseSemEspacos.length - 1;


    while (inicio < fim) {
        if (fraseSemEspacos[inicio] != fraseSemEspacos[fim]) {
            isPalindromo = false;
            break;
        }
        inicio++
        fim--;
    }

    return isPalindromo
}

let formulario = document.getElementById("form");

formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault();
    let palavra = document.getElementById("palavra").value;
    
    if (verificarPalindromo(palavra)) {
        alert("A frase/palavra é um palíndromo.");
    } else {
        alert("A frase/palavra não é um palíndromo.");
    }
})







