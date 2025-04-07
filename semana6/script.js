const conteudo = document.getElementById("conteudo")


class Teclado {
    constructor(cor, altura) {
        this.cor = cor;
        this.altura = altura;
    }

    construirTeclado = () => {
        const divTeclado = document.createElement("div");
        const calculadora = document.getElementById("calculadora");


        divTeclado.style.display = "grid";
        divTeclado.style.gridTemplateColumns = "repeat(4, 1fr)";
        divTeclado.style.gap = "10px";
        divTeclado.style.backgroundColor = this.cor;
        divTeclado.style.height = this.altura
        divTeclado.style.width = "100%";
        divTeclado.id = "teclado";
        divTeclado.style.padding ="20px "

        calculadora.appendChild(divTeclado);
    }
}   

class Botao {
    constructor(cor, conteudo, isNumero, colunas, id, corFonte) {
        this.cor = cor;
        this.conteudo = conteudo;
        this.isNumero = isNumero;
        this.colunas = colunas;
        this.id = id;
        this.corFonte = corFonte;
    }

    construirBotao = () => {
        const divBotao = document.createElement("div")
        const divTeclado = document.getElementById("teclado");
        const divVisor = document.getElementById("visor");
        

        divBotao.style.display = "flex";
        divBotao.style.justifyContent = "center";
        divBotao.style.alignItems = "center";   
        divBotao.style.height = "57.5px";
        divBotao.style.borderRadius = "50%"
        divBotao.style.fontSize = "25px";
        divBotao.style.cursor = "pointer";
        divBotao.style.userSelect = "none";
        divBotao.style.color = this.corFonte;
        divBotao.id = this.id;
        divBotao.style.gridColumn = this.colunas;
        divBotao.textContent = this.conteudo;
        divBotao.style.backgroundColor = this.cor;
        divBotao.style.fontFamily = "Segoe UI"
        divBotao.style.fontWeight = 400;

        if(this.conteudo == 0) {
            divBotao.style.gridColumn = "span 2";
            divBotao.style.borderRadius = "45px";
            divBotao.style.justifyContent = "left";
            divBotao.style.paddingLeft = "22px"
        }
        divTeclado.appendChild(divBotao);

    }
}


class Visor {
    constructor(altura){
        this.altura = altura;
        
    }
    
    construirVisor = () => {
        const divVisor = document.createElement("div")
        const calculadora = document.getElementById("calculadora");
        
        divVisor.style.display = "flex";
        divVisor.style.justifyContent = "right";
        divVisor.style.alignItems = "center"; 
        divVisor.style.height = this.altura;
        divVisor.style.width = calculadora.style.width;
        divVisor.style.backgroundColor = calculadora.style.backgroundColor;
        divVisor.style.fontSize = this.altura;
        divVisor.textContent = 0;
        divVisor.style.color = "white"
        divVisor.style.fontFamily = "Segoe UI Light"
        divVisor.style.paddingRight = "20px"
        divVisor.style.paddingLeft = "40px"
        divVisor.style.paddingTop= "10px"
        divVisor.id = "visor";
        divVisor.style.overflow = "clip";
        calculadora.appendChild(divVisor);
        
    }
}


class Calculadora {
    constructor(altura, largura, cor){
        this.altura = altura;
        this.largura = largura;
        this.cor = cor;
    }
    
    construirCalculadora = () => {
        const divCalculadora = document.createElement("div")
        divCalculadora.style.height = this.altura;
        divCalculadora.style.width = this.largura;
        divCalculadora.style.backgroundColor = this.cor;
        divCalculadora.id = "calculadora";
        divCalculadora.style.display = "grid"
        
        conteudo.appendChild(divCalculadora);
    }
}


const calculadora = new Calculadora("500px", "300px", "black");
calculadora.construirCalculadora();

const visor = new Visor("80px");
visor.construirVisor();

const teclado = new Teclado("black", "375px");
teclado.construirTeclado();

//Primeira Linha

const botaoAC = new Botao("rgb(163, 163, 163)", "AC", false, 1, "AC", "black");
botaoAC.construirBotao();

const botaoMM = new Botao("rgb(163, 163, 163)", "±", false, 2, "mm", "black");
botaoMM.construirBotao();

const botaoP = new Botao("rgb(163, 163, 163)", "%", false, 3, "porcentagem", "black");
botaoP.construirBotao();

const botaoD = new Botao("rgb(255, 149, 0)", "÷", false, 4, "divisao","white");
botaoD.construirBotao();

//Segunda Linha


const botao7 = new Botao("rgb(55, 55, 55)", "7", true, 1, "sete", "white");
botao7.construirBotao();

const botao8 = new Botao("rgb(55, 55, 55)", "8", true, 2, "oito", "white");
botao8.construirBotao();

const botao9 = new Botao("rgb(55, 55, 55)", "9", true, 3, "nove", "white");
botao9.construirBotao();


const botaoM = new Botao("rgb(255, 149, 0)", "×", false, 4, "multiplcacao","white");
botaoM.construirBotao();

//Terceira Linha


const botao4 = new Botao("rgb(55, 55, 55)", "4", true, 1, "quatro", "white");
botao4.construirBotao();

const botao5 = new Botao("rgb(55, 55, 55)", "5", true, 2, "cinco", "white");
botao5.construirBotao();


const botao6 = new Botao("rgb(55, 55, 55)", "6", true, 3, "seis", "white");
botao6.construirBotao();

const botaoSU = new Botao("rgb(255, 149, 0)", "-", false, 4, "subtracao" ,"white");
botaoSU.construirBotao();

//Quarta Linha


const botao1 = new Botao("rgb(55, 55, 55)", "1", true, 1, "um", "white");
botao1.construirBotao();


const botao2 = new Botao("rgb(55, 55, 55)", "2", true, 2, "dois", "white");
botao2.construirBotao();

const botao3 = new Botao("rgb(55, 55, 55)", "3", true, 3, "tres", "white");
botao3.construirBotao();

const botaoSO = new Botao("rgb(255, 149, 0)", "+", false, 4, "soma" ,"white");
botaoSO.construirBotao();

//Quinta Linha


const botao0 = new Botao("rgb(55, 55, 55)", "0", true, 1, "zero", "white");
botao0.construirBotao();

const botaoDEC = new Botao("rgb(55, 55, 55)", ",", false, 3, "ponto", "white");
botaoDEC.construirBotao();

const botaoI = new Botao("rgb(255, 149, 0)", "=", false, 4, "igual" ,"white");
botaoI.construirBotao();


//Parte Funcional

let expressao = "";

document.getElementById("teclado").addEventListener("click", (e) => {
    const botaoClicado = e.target;

    if (!botaoClicado.id) return;

    const visor = document.getElementById("visor");
    const valor = botaoClicado.textContent;

    switch (valor) {
        case "AC":
            expressao = "";
            visor.textContent = 0;
            break;
        case "=":
            try {
                // Substituir símbolos por operadores JS válidos
                const exp = expressao.replace(/÷/g, "/").replace(/×/g, "*").replace(/,/g, ".");
                const resultado = eval(exp);
                visor.textContent = resultado;
                expressao = resultado.toString();
            } catch (e) {
                visor.textContent = "Erro";
                expressao = "";
            }
            break;
        case "±":
            if (expressao) {
                if (expressao.startsWith("-")) {
                    expressao = expressao.slice(1);
                } else {
                    expressao = "-" + expressao;
                }
                visor.textContent = expressao;
            }
            break;
        case "%":
            if (expressao) {
                expressao = (parseFloat(expressao) / 100).toString();
                visor.textContent = expressao;
            }
            break;
        default:
            // Evita adicionar operadores duplicados
            const operadores = ["+", "-", "×", "÷"];
            const ultimoChar = expressao.slice(-1);
            if (operadores.includes(valor) && operadores.includes(ultimoChar)) {
                expressao = expressao.slice(0, -1) + valor;
            } else {
                expressao += valor;
            }

            visor.textContent = expressao;
            break;
    }
});