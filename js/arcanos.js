let inputBusca = document.getElementById('inputBusca')
let btnBusca = document.getElementById('btnBusca')
let containerCard = document.getElementById('containerCard')

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
let lua = document.querySelector('.lua')
let sol = document.querySelector('.sol')
let julgamento = document.querySelector('.julgamento')
let mundo = document.querySelector('.mundo')









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
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O MAGO' || inputBusca.value == 1) {
        mago.style.display = 'block'
        louco.style.display = 'none'
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
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'A SACERDOTISA' || inputBusca.value == 2){
        sacerdotisa.style.display = 'block'
        louco.style.display = 'none'
        mago.style.display = 'none'
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
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'A IMPERATRIZ' || inputBusca.value == 3){
        imperatriz.style.display = 'block'
        louco.style.display = 'none'
        mago.style.display = 'none'
        sacerdotisa.style.display = 'none'
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
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O IMPERADOR' || inputBusca.value == 4){
        imperador.style.display = 'block'
        louco.style.display = 'none'
        mago.style.display = 'none'
        sacerdotisa.style.display = 'none'
        imperatriz.style.display = 'none'
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
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O PAPA' || inputBusca.value == 5){
        papa.style.display = 'block'
        louco.style.display = 'none'
        mago.style.display = 'none'
        sacerdotisa.style.display = 'none'
        imperatriz.style.display = 'none'
        imperador.style.display = 'none'
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
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'OS ENAMORADOS' || inputBusca.value == 6){
        enamorados.style.display = 'block'
        louco.style.display = 'none'
        mago.style.display = 'none'
        sacerdotisa.style.display = 'none'
        imperatriz.style.display = 'none'
        imperador.style.display = 'none'
        papa.style.display = 'none'
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
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O CARRO' || inputBusca.value == 7){
        carro.style.display = 'block'
        louco.style.display = 'none'
        mago.style.display = 'none'
        sacerdotisa.style.display = 'none'
        imperatriz.style.display = 'none'
        imperador.style.display = 'none'
        papa.style.display = 'none'
        enamorados.style.display = 'none'
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
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'A FORÇA' || inputBusca.value == 8){
        forca.style.display = 'block'
        louco.style.display = 'none'
        mago.style.display = 'none'
        sacerdotisa.style.display = 'none'
        imperatriz.style.display = 'none'
        imperador.style.display = 'none'
        papa.style.display = 'none'
        enamorados.style.display = 'none'
        carro.style.display = 'none'
        eremita.style.display = 'none'
        roda.style.display = 'none'
        justica.style.display = 'none'
        enforcado.style.display = 'none'
        morte.style.display = 'none'
        temperanca.style.display = 'none'
        diabo.style.display = 'none'
        torre.style.display = 'none'
        estrela.style.display = 'none'
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O EREMITA' || inputBusca.value == 9){
        eremita.style.display = 'block'
        louco.style.display = 'none'
        mago.style.display = 'none'
        sacerdotisa.style.display = 'none'
        imperatriz.style.display = 'none'
        imperador.style.display = 'none'
        papa.style.display = 'none'
        enamorados.style.display = 'none'
        carro.style.display = 'none'
        forca.style.display = 'none'
        roda.style.display = 'none'
        justica.style.display = 'none'
        enforcado.style.display = 'none'
        morte.style.display = 'none'
        temperanca.style.display = 'none'
        diabo.style.display = 'none'
        torre.style.display = 'none'
        estrela.style.display = 'none'
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'A RODA DA FORTUNA' || inputBusca.value == 10){
        roda.style.display = 'block'
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
        justica.style.display = 'none'
        enforcado.style.display = 'none'
        morte.style.display = 'none'
        temperanca.style.display = 'none'
        diabo.style.display = 'none'
        torre.style.display = 'none'
        estrela.style.display = 'none'
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'A JUSTIÇA' || inputBusca.value == 11){
        justica.style.display = 'block'
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
        enforcado.style.display = 'none'
        morte.style.display = 'none'
        temperanca.style.display = 'none'
        diabo.style.display = 'none'
        torre.style.display = 'none'
        estrela.style.display = 'none'
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O ENFORCADO' || inputBusca.value.toUpperCase() == 'O PENDURADO' || inputBusca.value == 12){
        enforcado.style.display = 'block'
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
        morte.style.display = 'none'
        temperanca.style.display = 'none'
        diabo.style.display = 'none'
        torre.style.display = 'none'
        estrela.style.display = 'none'
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'A MORTE' || inputBusca.value == 13){
        morte.style.display = 'block'
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
        temperanca.style.display = 'none'
        diabo.style.display = 'none'
        torre.style.display = 'none'
        estrela.style.display = 'none'
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'A TEMPERANCA' || inputBusca.value == 14){
        temperanca.style.display = 'block'
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
        diabo.style.display = 'none'
        torre.style.display = 'none'
        estrela.style.display = 'none'
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O DIABO' || inputBusca.value == 15){
        diabo.style.display = 'block'
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
        torre.style.display = 'none'
        estrela.style.display = 'none'
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'A TORRE' || inputBusca.value == 16){
        torre.style.display = 'block'
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
        estrela.style.display = 'none'
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'A ESTRELA' || inputBusca.value == 17){
        estrela.style.display = 'block'
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
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'A LUA' || inputBusca.value == 18){
        lua.style.display = 'block'
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
        sol.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O SOL' || inputBusca.value == 19){
        sol.style.display = 'block'
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
        lua.style.display = 'none'
        julgamento.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O JULGAMENTO' || inputBusca.value == 20){
        julgamento.style.display = 'block'
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
        lua.style.display = 'none'
        sol.style.display = 'none'
        mundo.style.display = 'none'
    } else if(inputBusca.value.toUpperCase() == 'O MUNDO' || inputBusca.value == 21){
        mundo.style.display = 'block'
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
        lua.style.display = 'none'
        sol.style.display = 'none'
        julgamento.style.display = 'none'
    }
})