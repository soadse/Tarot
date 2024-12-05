let inputBusca = document.getElementById('inputBusca')
let btnBusca = document.getElementById('btnBusca')
let containerCard = document.getElementById('containerCard')
let louco = document.querySelector('.louco')
let mago = document.querySelector('.mago')

btnBusca.addEventListener('click', () => {
    if(inputBusca.value.toUpperCase() == ''){
        containerCard.innerHTML = 'Insira o nome do arcano ou informe seu número'
    } else if(inputBusca.value.toUpperCase() == 'O LOUCO' || inputBusca.value == 0) {
        louco.style.display = 'block'
        mago.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O MAGO' || inputBusca.value == 1) {
        mago.style.display = 'block'
        louco.style.display = 'none'
    }
})