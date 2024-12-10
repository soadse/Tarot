let inputBusca = document.querySelector('.inputBusca')
let btnBusca = document.querySelector('.btnBusca')
let containerCard = document.querySelector('.containerCard')
let resposta = document.querySelector('.resposta')

let louco = document.querySelector('.louco')
let mago = document.querySelector('.mago')
let sacerdotisa = document.querySelector('.sacerdotisa')
let imperatriz = document.querySelector('.imperatriz')
let imperador = document.querySelector('.imperador')
let papa = document.querySelector('.papa')
let enamorados = document.querySelector('.enamorados')
let carro = document.querySelector('.carro')
let forca = document.querySelector('.forca')
let eremita = document.querySelector('.eremita')
let roda = document.querySelector('.roda')
let justica = document.querySelector('.justica')
let enforcado = document.querySelector('.enforcado')
let morte = document.querySelector('.morte')
let temperanca = document.querySelector('.temperanca')
let diabo = document.querySelector('.diabo')
let torre = document.querySelector('.torre')
let estrela = document.querySelector('.estrela')
let luaa = document.querySelector('.lua')
let soll = document.querySelector('.sol')
let julgamento = document.querySelector('.julgamento')
let mundo = document.querySelector('.mundo')

btnBusca.addEventListener('click', () => {
    louco.style.display = 'none'
    mago.style.display = 'none'
    sacerdotisa.style.display = 'none'
    imperatriz.style.display = 'none'
    imperador.style.display = 'none'
    papa.style.display = 'none'
    enamorados.style.display = 'none'
    carro.style.display = 'none'
    forca.style.display = 'none'
    eremita.style.display = 'none'
    roda.style.display = 'none'
    justica.style.display = 'none'
    enforcado.style.display = 'none'
    morte.style.display = 'none'
    temperanca.style.display = 'none'
    diabo.style.display = 'none'
    torre.style.display = 'none'
    estrela.style.display = 'none'
    luaa.style.display = 'none'
    soll.style.display = 'none'
    julgamento.style.display = 'none'
    mundo.style.display = 'none'
    resposta.innerHTML = ''
    if(inputBusca.value == ''){
        resposta.innerHTML = `Insira o nome ou número do arcano para busca`
    }
    else if(inputBusca.value.trim().toUpperCase() == 'O LOUCO' || inputBusca.value.trim().toUpperCase() == 'LOUCO' || inputBusca.value == 0 ){
        louco.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'O MAGO' || inputBusca.value.trim().toUpperCase() == 'MAGO' || inputBusca.value == 1){
        mago.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'A SACERDOTISA' || inputBusca.value.trim().toUpperCase() == 'SACERDOTISA' || inputBusca.value == 2){
        sacerdotisa.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'A IMPERATRIZ' || inputBusca.value.trim().toUpperCase() == 'IMPERATRIZ' || inputBusca.value == 3){
        imperatriz.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'O IMPERADOR' || inputBusca.value.trim().toUpperCase() == 'IMPERADOR' || inputBusca.value == 4){
        imperador.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'O PAPA' || inputBusca.value.trim().toUpperCase() == 'PAPA' || inputBusca.value == 5){
        papa.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'OS ENAMORADOS' || inputBusca.value.trim().toUpperCase() == 'ENAMORADOS' || inputBusca.value == 6){
        enamorados.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'O CARRO' || inputBusca.value.trim().toUpperCase() == 'CARRO' || inputBusca.value == 7){
        carro.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'A FORÇA' || inputBusca.value.trim().toUpperCase() == 'FORÇA' || inputBusca.value.trim().toUpperCase() == 'A FORCA' || inputBusca.value.trim().toUpperCase() == 'FORCA' || inputBusca.value == 8){
        forca.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'O EREMITA' || inputBusca.value.trim().toUpperCase() == 'EREMITA' || inputBusca.value == 9){
        eremita.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'A RODA DA FORTUNA' || inputBusca.value.trim().toUpperCase() == 'RODA DA FORTUNA' || inputBusca.value == 10){
        roda.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'A JUSTIÇA' || inputBusca.value.trim().toUpperCase() == 'JUSTIÇA' || inputBusca.value.trim().toUpperCase() == 'A JUSTICA' || inputBusca.value.trim().toUpperCase() == 'JUSTICA' || inputBusca.value == 11){
        justica.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'O ENFORCADO' || inputBusca.value.trim().toUpperCase() == 'ENFORCADO' || inputBusca.value.trim().toUpperCase() == 'O PENDURADO' || inputBusca.value.trim().toUpperCase() == 'PENDURADO' || inputBusca.value == 12){
        enforcado.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'A MORTE' || inputBusca.value.trim().toUpperCase() == 'MORTE' || inputBusca.value == 13){
        morte.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'A TEMPERANÇA' || inputBusca.value.trim().toUpperCase() == 'TEMPERANÇA' || inputBusca.value.trim().toUpperCase() == 'A TEMPERANCA' || inputBusca.value.trim().toUpperCase() == 'TEMPERANCA' || inputBusca.value == 14){
        temperanca.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'O DIABO' || inputBusca.value.trim().toUpperCase() == 'DIABO' || inputBusca.value == 15){
        diabo.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'A TORRE' || inputBusca.value.trim().toUpperCase() == 'TORRE' || inputBusca.value == 16){
        torre.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'A ESTRELA' || inputBusca.value.trim().toUpperCase() == 'ESTRELA' || inputBusca.value == 17){
        estrela.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'A LUA' || inputBusca.value.trim().toUpperCase() == 'LUA' || inputBusca.value == 18){
        luaa.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'O SOL' || inputBusca.value.trim().toUpperCase() == 'SOL' || inputBusca.value == 19){
        soll.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'O JULGAMENTO' || inputBusca.value.trim().toUpperCase() == 'JULGAMENTO' || inputBusca.value == 20){
        julgamento.style.display = 'block'
    } else if(inputBusca.value.trim().toUpperCase() == 'O MUNDO' || inputBusca.value.trim().toUpperCase() == 'MUNDO' || inputBusca.value == 21){
        mundo.style.display = 'block'
    } else {
        resposta.innerHTML = `Arcano ${inputBusca.value} não encontrato`
    }
    inputBusca.value = '' 
})