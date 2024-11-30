let itemMenuOpen = document.getElementById('itemMenuOpen')
let itemMenuClose = document.getElementById('itemMenuClose')
let itemMenu = document.querySelectorAll('.itemMenu')

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