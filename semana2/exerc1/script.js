/*
1. Implemente um script JavaScript que exiba a data atual no 
formato:
Quinta-feira, 22 de agosto de 2024
*/

let data = new Date();

const diasDaSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira",
    "Sexta-feira", "Sabado"
];

const meses = [
    "janeiro", "fevereiro", "março", "abril",
    "maio", "junho", "julho", "agosto",
    "setembro", "outubro", "novembro", "dezembro"
];

let diaDaSemanaAtual = diasDaSemana[data.getDay()];
let mesAtual = meses[data.getMonth()];
let diaAtual = data.getDate();
let anoAtual = data.getFullYear();

let corpoPagina = document.getElementById("corpo");

corpoPagina.textContent = 
    diaDaSemanaAtual + ", " + diaAtual + " de " + mesAtual + " de " + anoAtual