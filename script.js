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
    corpo.style.background = '#420064'
    for(let p of paragrafros){
        p.style.color = 'white'
    }
    for(let h1 of titulo01){
        h1.style.color = 'red'
    }
    for(let h2 of titulo02){
        h2.style.color = 'green'
    }
    for(let h3 of titulo03){
        h3.style.color = 'orange'
    }
})

lua.addEventListener('click', () => {
    lua.style.display = 'none'
    sol.style.display = 'flex'
    corpo.style.background = 'white'
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