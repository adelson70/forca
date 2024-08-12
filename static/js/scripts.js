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

    fetch('/dimensao', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({largura: largura, altura: altura})

    })
    .then(response=>response.json())
}

window.addEventListener('load', orientacao)

// QUANDO CLICA NA LETRA PARA DESCOBRIR A PALAVRA
document.querySelectorAll('.btn-letter').forEach(button=>{
    button.addEventListener('click', function(){
        const letter = this.getAttribute('data-letter')
        console.log(letter)
    })
})