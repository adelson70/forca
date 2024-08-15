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

// QUANDO CLICA PARA ADICIONAR A PALAVRA AO BANCO DE DADOS
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn-add-word').addEventListener('click', function(){
        const newWord = document.getElementById('novaPalavra').value
        
        if (newWord.length < 3){
            console.log('Minimo 3 letras!')
        }

        else if (newWord.length > 12){
            console.log('Maximo 12 letras!')
        }

        else if (newWord.includes(' ')){
            console.log('apenas palavras!')
        }

        else{
            console.log(newWord)

            fetch('/addPalavra', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({word: newWord})
        
            })
            .then(response=>response.json())

        }
    })
})