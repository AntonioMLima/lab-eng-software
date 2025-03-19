let formulario = document.getElementById("form");
let input = document.getElementById("input");
let lista = document.getElementById("lista");

let arrayForm = [];

function mostrarArray(arrayForm) {
    lista.textContent = "Lista Ordenada";
    for (let i = 0; i < arrayForm.length; i++) {
        let p = document.createElement("ul");
        lista.appendChild(p);
        p.innerHTML= i + ": " + arrayForm[i];
    }
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let valor = input.value;

    arrayForm.push(valor);
    arrayForm = arrayForm.sort();

    mostrarArray(arrayForm);
    

})