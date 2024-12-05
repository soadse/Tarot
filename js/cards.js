let corpo = document.body
let cabeca = document.getElementsByTagName("header")
let itemMenuOpen = document.getElementById('itemMenuOpen')
let itemMenuClose = document.getElementById('itemMenuClose')
let itemMenu = document.querySelectorAll('.itemMenu')
let sol = document.getElementById('sol')
let lua = document.getElementById('lua')
let paragrafros = document.getElementsByTagName("p")
let titulo01 = document.getElementsByTagName("h1")
let titulo02 = document.getElementsByTagName("h2")
let titulo03 = document.getElementsByTagName("strong")
let tituloLista = document.getElementsByTagName("ol")
let listaConteudo = document.getElementsByTagName("li")
let inputBuscaColor = document.getElementById('inputBusca')



sol.addEventListener('click', () => {
    sol.style.display = 'none'
    lua.style.display = 'flex'
    sol.style.animation = 'sol 1s forwards'
    corpo.style.background = '#121212'
    inputBuscaColor.style.color = '#E5E6EA'
    inputBuscaColor.style.borderBottom = '1px solid #E5E6EA'
    for(let header of cabeca){
        header.style.backgroundImage = "url('../img/fundo_lua.png')"
    }
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

lua.addEventListener('click', () => {
    lua.style.display = 'none'
    sol.style.display = 'flex'
    corpo.style.background = 'white'
    inputBuscaColor.style.color = 'black'
    inputBuscaColor.style.borderBottom = '1px solid black'
    for(let header of cabeca){
        header.style.backgroundImage = "url('../img/fundo_sol.png')"
    }
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