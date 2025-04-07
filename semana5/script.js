const conteudo = document.getElementById("conteudo");

const divPrincipal = document.createElement("div");
divPrincipal.className = "shadow p-4 rounded";
divPrincipal.style.height = "45vh";
divPrincipal.style.width = "40vh";

// Primeira Linha
const divPrimeiraLinha = document.createElement("div");
divPrimeiraLinha.className = "row";

const divTotal = document.createElement("div");
divTotal.className = "col-6 text-center";

const h3Total = document.createElement("h3");
h3Total.textContent = "Total";
h3Total.style.userSelect = "none"
h3Total.className = "fw-normal"
divTotal.appendChild(h3Total);

divPrimeiraLinha.appendChild(divTotal)

const divIcon = document.createElement("div");
divIcon.className = "col-5 text-end";
const zerarIcon = document.createElement("i");
zerarIcon.className = "bi bi-arrow-counterclockwise fs-3";
zerarIcon.style.cursor = "pointer";
divIcon.appendChild(zerarIcon);

divPrimeiraLinha.appendChild(divIcon);

divPrincipal.appendChild(divPrimeiraLinha);


//Segunda linha
const divSegundaLinha = document.createElement("div");
divSegundaLinha.className = "row justify-content-center mb-3";

const divContador = document.createElement("div");
divContador.className = "col-10 text-center";

const contador = document.createElement("div");
contador.className = "border rounded";
contador.style.width = "10vh";
contador.textContent = 0;
conteudo.style.userSelect = "none";

divContador.appendChild(contador);
divSegundaLinha.appendChild(divContador);
divPrincipal.appendChild(divSegundaLinha);


//Terceira linha
const divTerceiraLinha = document.createElement("div");
divTerceiraLinha.className = "row";
divTerceiraLinha.style.height = "9vh";

const divIconeH = document.createElement("div");
divIconeH.className = "col-6 text-center";

const iconeH = document.createElement("i");
iconeH.className = "bi bi-gender-male fs-1";
iconeH.style.color = "blue";

const divIconeM = document.createElement("div");
divIconeM.className = "col-6 text-center";

const iconeM = document.createElement("i");
iconeM.className = "bi bi-gender-female fs-1";
iconeM.style.color = "rgb(190, 18, 190)";

divIconeH.appendChild(iconeH);
divIconeM.appendChild(iconeM);

divTerceiraLinha.appendChild(divIconeH);
divTerceiraLinha.appendChild(divIconeM);

divPrincipal.appendChild(divTerceiraLinha);


//Quarta linha

const divQuartaLinha = document.createElement("div");
divQuartaLinha.className = "row";
divQuartaLinha.style.height = "12vh";

const divIncDecHomem = document.createElement("div");
divIncDecHomem.className = "col-6 text-center";

const incH = document.createElement("i")
incH.className = "bi bi-plus-lg fs-4 ";
incH.style.color = "rgb(3, 172, 3)";
incH.style.cursor = "pointer";

const separadorH = document.createElement("i");
separadorH.className = "border m-3";

const decH = document.createElement("i");
decH.className = "bi bi-dash-lg fs-4";
decH.style.color = "red";
decH.style.cursor = "pointer";

divIncDecHomem.appendChild(incH);
divIncDecHomem.appendChild(separadorH)
divIncDecHomem.appendChild(decH);

const divIncDecMulher = document.createElement("div");
divIncDecMulher.className = "col-6 text-center";

const incM = document.createElement("i")
incM.className = "bi bi-plus-lg fs-4";
incM.style.color = "rgb(3, 172, 3)";

incM.style.cursor = "pointer";


const decM = document.createElement("i");
decM.className = "bi bi-dash-lg fs-4";
decM.style.color = "red";
decM.style.cursor = "pointer";
const separadorM = document.createElement("i");
separadorM.className = "border m-3";

divIncDecMulher.appendChild(incM);
divIncDecMulher.appendChild(separadorM);
divIncDecMulher.appendChild(decM);

divQuartaLinha.appendChild(divIncDecHomem); 
divQuartaLinha.appendChild(divIncDecMulher);



divPrincipal.appendChild(divQuartaLinha);

//Quinta linha
const divQuintaLinha = document.createElement("div");
divQuintaLinha.className = "row";

const divContH = document.createElement("div");
divContH.className = "col-6 text-center";
const tituloContadorH = document.createElement("h3");
tituloContadorH.className = "fs-5 fw-normal";
tituloContadorH.textContent = "Homens";
tituloContadorH.style.userSelect = "none";
const contadorH = document.createElement("div")
contadorH.className = "border rounded";
contadorH.textContent = 0;
contadorH.style.userSelect = "none";


divContH.appendChild(tituloContadorH);
divContH.appendChild(contadorH);

const divContM = document.createElement("div");
divContM.className = "col-6 text-center";
const tituloContadorM = document.createElement("h3");
tituloContadorM.className = "fs-5 fw-normal";
tituloContadorM.textContent = "Mulheres";
tituloContadorM.style.userSelect = "none";

const contadorM = document.createElement("div");
contadorM.className = "border rounded";
contadorM.textContent = 0;
contadorM.style.userSelect = "none";


divContM.appendChild(tituloContadorM)
divContM.appendChild(contadorM)



divQuintaLinha.appendChild(divContH);
divQuintaLinha.appendChild(divContM);

divPrincipal.appendChild(divQuintaLinha);
conteudo.append(divPrincipal);



function zerarContador() {
    contadorM.textContent = 0;
    contadorH.textContent = 0;
    contador.textContent = 0;
}


function aumentarPessoas(genero) {
    if (genero == "h") {
        contadorH.textContent = parseInt(contadorH.textContent, 10) + 1;
    } else if (genero == "m") {
        contadorM.textContent = parseInt(contadorM.textContent, 10) + 1;    
    }
    calcularTotal();
}

function diminuirPessoas(genero) {
    if (genero == "h" &&  parseInt(contadorH.textContent, 10) > 0) {
        contadorH.textContent = parseInt(contadorH.textContent, 10) - 1;
    } else if (genero == "m" && parseInt(contadorM.textContent, 10) > 0) {
        contadorM.textContent = parseInt(contadorM.textContent, 10) - 1;    
    }
    calcularTotal();
}

function calcularTotal() {
    contador.textContent = parseInt(contadorH.textContent, 10) + parseInt(contadorM.textContent, 10);
}

zerarIcon.addEventListener("click", function () {
    zerarContador();
})

incH.addEventListener("click", function() {
    aumentarPessoas("h");
})

incM.addEventListener("click", function() {
    aumentarPessoas("m");
})


decH.addEventListener("click", function() {
    diminuirPessoas("h");
})


decM.addEventListener("click", function() {
    diminuirPessoas("m");
})




