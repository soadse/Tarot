let corpo = document.body
let cabeca = document.getElementsByTagName("header")
let titulo03 = document.getElementsByTagName("strong")
let paragrafos = document.getElementsByTagName("p")
let tituloLista = document.getElementsByTagName("ol")
let listaConteudo = document.getElementsByTagName("li")
let claro = document.querySelector('.claro')
let escuro = document.querySelector('.escuro')
let inputBuscaColor = document.querySelector('.inputBusca')
let respostaa = document.querySelector('.resposta')



claro.addEventListener('click', () => {
    claro.style.display = 'none'
    escuro.style.display = 'flex'
    claro.style.animation = 'sol 1s forwards'
    corpo.style.background = '#121212'
    inputBuscaColor.style.color = '#E5E6EA'
    inputBuscaColor.style.borderBottom = '1px solid #E5E6EA'
    respostaa.style.color = '#E5E6EA'
    for(let header of cabeca){
        header.style.backgroundImage = "url('../img/fundo_lua.png')"
    }
    for(let p of paragrafos){
        p.style.color = '#E5E6EA'
    }
    for(let ol of tituloLista){
        ol.style.color = '#E5E6EA'
    }
    for(let li of listaConteudo){
        li.style.color = '#E5E6EA'
    }
})

escuro.addEventListener('click', () => {
    escuro.style.display = 'none'
    claro.style.display = 'flex'
    corpo.style.background = 'white'
    inputBuscaColor.style.color = 'black'
    inputBuscaColor.style.borderBottom = '1px solid black'
    respostaa.style.color = 'black'
    for(let header of cabeca){
        header.style.backgroundImage = "url('../img/fundo_sol.png')"
    }
    for(let p of paragrafos){
        p.style.color = 'black'
    }
    for(let ol of tituloLista){
        ol.style.color = 'black'
    }
    for(let li of listaConteudo){
        li.style.color = 'black'
    }
})
