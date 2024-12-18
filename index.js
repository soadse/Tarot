let corpo = document.body
let fundo = document.getElementById('inicioPag')
let paragrafos = document.getElementsByTagName("p")
let tituloLista = document.getElementsByTagName("ol")
let listaConteudo = document.getElementsByTagName("li")
let claro = document.querySelector('.claro')
let escuro = document.querySelector('.escuro')

claro.addEventListener('click', () => {
    claro.style.display = 'none'
    escuro.style.display = 'flex'
    claro.style.animation = 'sol 1s forwards'
    corpo.style.background = '#121212'
    fundo.style.backgroundImage = "url('img/fundo_lua.png')"
    for(let p of paragrafos){
        p.style.color = '#E5E6EA'
    } for(let ol of tituloLista){
        ol.style.color = '#E5E6EA'
    } for(let li of listaConteudo){
        li.style.color = '#E5E6EA'
    }
})

escuro.addEventListener('click', () => {
    escuro.style.display = 'none'
    claro.style.display = 'flex'
    corpo.style.background = 'white'
    fundo.style.backgroundImage = "url('img/fundo_sol.png')"
    for(let p of paragrafos){
        p.style.color = 'black'
    } for(let ol of tituloLista){
        ol.style.color = 'black'
    } for(let li of listaConteudo){
        li.style.color = 'black'
    }
})