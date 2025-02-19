/*
4. Implemente um script JavaScript que solicite ao usuário a entrada de um 
dado via teclado. Em seguida, pergunte se o usuário deseja verificar o tipo do 
dado informado. Caso o usuário confirme escreva no corpo da página o tipo 
do dado (Number, String, etc.) caso contrário escreva a mensagem: “Obrigado 
por visitar esta página”.
*/

let dado = prompt("Digite algo:")

if (confirm("Deseja verificar o tipo de dado informado?")) {
    document.write("O dado informado é do tipo " + typeof(dado))
} else {
    document.write("Obrigado por visitar esta página")
}