let corpo = document.body
let itemMenuOpen = document.getElementById('itemMenuOpen')
let itemMenuClose = document.getElementById('itemMenuClose')
let itemMenu = document.querySelectorAll('.itemMenu')
let sol = document.getElementById('sol')
let lua = document.getElementById('lua')
let paragrafros = document.getElementsByTagName("p")
let titulo01 = document.getElementsByTagName("h1")
let titulo02 = document.getElementsByTagName("h2")
let titulo03 = document.getElementsByTagName("strong")

// As cores estão em teste

sol.addEventListener('click', () => {
    sol.style.display = 'none'
    lua.style.display = 'flex'
    sol.style.animation = 'sol 1s forwards'
    corpo.style.background = '#121212'
    for(let p of paragrafros){
        p.style.color = 'white'
    }
})

lua.addEventListener('click', () => {
    lua.style.display = 'none'
    sol.style.display = 'flex'
    corpo.style.background = 'white'
    for(let p of paragrafros){
        p.style.color = 'black'
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