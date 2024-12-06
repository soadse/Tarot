let inputBusca = document.getElementById('inputBusca')
let btnBusca = document.getElementById('btnBusca')
let containerCard = document.getElementById('containerCard')
let louco = document.querySelector('.louco')
let mago = document.querySelector('.mago')
let sacerdotisa = document.querySelector('.sacerdotisa')
let imperatriz = document.querySelector('.imperatriz')
let imperador = document.querySelector('.imperador')
let papa = document.querySelector('.papa')

btnBusca.addEventListener('click', () => {
    if(inputBusca.value.toUpperCase() == ''){
        containerCard.innerHTML = 'Insira o nome do arcano ou informe seu número'
    } else if(inputBusca.value.toUpperCase() == 'O LOUCO' || inputBusca.value == 0) {
        louco.style.display = 'block'
        mago.style.display = 'none'
        sacerdotisa.style.display = 'none'
        imperatriz.style.display = 'none'
        imperador.style.display = 'none'
        papa.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O MAGO' || inputBusca.value == 1) {
        mago.style.display = 'block'
        louco.style.display = 'none'
        sacerdotisa.style.display = 'none'
        imperatriz.style.display = 'none'
        imperador.style.display = 'none'
        papa.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'A SACERDOTISA' || inputBusca.value == 2){
        sacerdotisa.style.display = 'block'
        louco.style.display = 'none'
        mago.style.display = 'none'
        imperatriz.style.display = 'none'
        imperador.style.display = 'none'
        papa.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'A IMPERATRIZ' || inputBusca.value == 3){
        imperatriz.style.display = 'block'
        sacerdotisa.style.display = 'none'
        mago.style.display = 'none'
        louco.style.display = 'none'
        imperador.style.display = 'none'
        papa.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O IMPERADOR' || inputBusca.value == 4){
        imperador.style.display = 'block'
        imperatriz.style.display = 'none'
        sacerdotisa.style.display = 'none'
        mago.style.display = 'none'
        louco.style.display = 'none'
        papa.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O PAPA' || inputBusca.value == 5){
        papa.style.display = 'block'
        imperador.style.display = 'none'
        imperatriz.style.display = 'none'
        sacerdotisa.style.display = 'none'
        mago.style.display = 'none'
        louco.style.display = 'none'
    }
})