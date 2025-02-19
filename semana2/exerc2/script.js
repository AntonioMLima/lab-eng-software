
/*
2. Pesquise a utilização do método setTimeout() e implemente 
um relógio que atualize o horário a cada segundo
*/


function atualizarRelogio() {
    
    const dataAtual = new Date();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();

    
    const corpo = document.getElementById('corpo');
    corpo.textContent = horas + ":" + minutos + ":" + segundos;

    
    setTimeout(atualizarRelogio, 1000);
    //recurssividade
}


atualizarRelogio();