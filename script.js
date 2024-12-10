let corpo = document.body
let cabeca = document.getElementsByTagName("header")
let itemMenuOpen = document.getElementById('itemMenuOpen')
let itemMenuClose = document.getElementById('itemMenuClose')
let itemMenu = document.querySelectorAll('.itemMenu')
let paragrafros = document.getElementsByTagName("p")
let titulo01 = document.getElementsByTagName("h1")
let titulo02 = document.getElementsByTagName("h2")
let titulo03 = document.getElementsByTagName("strong")
let tituloLista = document.getElementsByTagName("ol")
let listaConteudo = document.getElementsByTagName("li")
let claro = document.querySelector('claro')
let escuro = document.querySelector('escuro')




claro.addEventListener('click', () => {
    for(let header of cabeca){
        header.style.backgroundImage = "url('img/fundo_lua.png')"
    }
    claro.style.display = 'none'
    escuro.style.display = 'flex'
    claro.style.animation = 'sol 1s forwards'
    corpo.style.background = '#121212'
    for(let p of paragrafros){
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
    for(let header of cabeca){
        header.style.backgroundImage = "url('img/fundo_sol.png')"
    }
    escuro.style.display = 'none'
    claro.style.display = 'flex'
    corpo.style.background = 'white'
    for(let p of paragrafros){
        p.style.color = 'black'
    }
    for(let ol of tituloLista){
        ol.style.color = 'black'
    }
    for(let li of listaConteudo){
        li.style.color = 'black'
    }
    for(let a of menuA){
        a.style.color = '#420064'
    }
})


itemMenuOpen.addEventListener('click', () => {
    itemMenu.forEach((e) => {
        e.style.display = 'flex'
        e.style.justifyContent = 'center'
        e.style.alignItems = 'center'
    })
    itemMenuOpen.style.display = 'none'
    
})
itemMenuClose.addEventListener('click', () => {
    itemMenu.forEach((e) => {
        e.style.display = 'none'
    })
    itemMenuOpen.style.display = 'flex'
    itemMenuOpen.style.justifyContent = 'center'
    itemMenuOpen.style.alignItems = 'center'
})