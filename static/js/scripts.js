function orientacao(){
    const largura = window.innerWidth;
    const altura = window.innerHeight
    var orientacao = null

    console.log(`${largura}x${altura}`)

    if (largura > altura){
        document.body.classList.add('paisagem');
        document.body.classList.remove('retrato');
        orientacao = 'paisagem'
    }

    else {
        document.body.classList.add('retrato');
        document.body.classList.remove('paisagem');
        orientacao = 'retrato'
    }

    console.log(orientacao)
}

window.addEventListener('load', orientacao)