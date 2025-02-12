let dado = prompt("Digite algo:")

if (confirm("Deseja verificar o tipo de dado informado?")) {
    document.write("O dado informado é do tipo " + typeof(dado))
} else {
    document.write("Obrigado por visitar esta página")
}