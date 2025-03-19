function Carro () {
    let marca;
    let modelo;
    let ano;
    let cor;
    let km;
    let valorFipe;

    this.setMarca = function(marca) {
        this.marca = marca;
    }

    this.getMarca = function() {
        return this.marca;
    }

    this.setModelo = function (modelo) {
        this.modelo = modelo;
    }       

    this.getModelo = function() {
        return this.modelo;
    }

    this.setAno = function(ano) {
        this.ano = ano;
    }

    this.getAno = function() {
        return this.ano;
    }

    this.setCor = function (cor) {
        this.cor = cor;
    }

    this.getCor = function () {
        return this.cor;
    }

    this.setKm = function(km) {
        this.km = km;
    }

    this.getKm = function() {
        return this.km;
    }

    this.setValorFipe = function(valorFipe) {
        this.valorFipe = valorFipe;
    }

    this.getValorFipe = function() {
        return this.valorFipe;
    }

    this.anosUtilizacao = function() {
        let data = new Date();
        let anoAtual = data.getFullYear();
        return anoAtual - this.getAno();
    };

    this.valorMercado = function() {
        let valorFipe = this.getValorFipe();
        let km = this.getKm();
        let kmPorAno = km / this.getAno();
        if (kmPorAno <= 30000) {
            return (valorFipe *= 1.10).toFixed(2);
        } 
        else if(kmPorAno > 30000 && kmPorAno <= 50000) {
            return valorFipe.toFixed(2);
        }
        else if(kmPorAno > 50000) {
            return (valorFipe *= 0.9).toFixed(2);
        }
    }
}

let formulario = document.getElementById('form');
let info = document.getElementById('info');


formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let ano = document.getElementById("ano").value;
    let cor = document.getElementById("cor").value;
    let km = document.getElementById("km").value;
    let valorFipe = document.getElementById("valor_fipe").value;

    let carro = new Carro();
    carro.setMarca(marca);
    carro.setModelo(modelo);
    carro.setAno(ano);
    carro.setCor(cor);
    carro.setKm(km);
    carro.setValorFipe(valorFipe);

    let anosUtilizacao = carro.anosUtilizacao();
    let valorMercado = carro.valorMercado();


    info.innerText = `anos de utilização: ${anosUtilizacao}\nValor de Mercado: R$: ${valorMercado}`;

})
