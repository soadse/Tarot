let btnRandomizar = document.getElementById('btnRandomizar')
let carregamento = document.getElementById('carregamento')
let min = 0
let max = 22

let louco = document.querySelector('.louco');
let mago = document.querySelector('.mago');
let sacerdotisa = document.querySelector('.sacerdotisa');
let imperatriz = document.querySelector('.imperatriz');
let imperador = document.querySelector('.imperador');
let papa = document.querySelector('.papa');
let enamorados = document.querySelector('.enamorados');
let carro = document.querySelector('.carro');
let justica = document.querySelector('.justica');
let eremita = document.querySelector('.eremita');
let roda = document.querySelector('.roda');
let forca = document.querySelector('.forca');
let enforcado = document.querySelector('.enforcado');
let morte = document.querySelector('.morte');
let temperanca = document.querySelector('.temperanca');
let diabo = document.querySelector('.diabo');
let torre = document.querySelector('.torre');
let estrela = document.querySelector('.estrela');
let luaa = document.querySelector('.lua');
let soll = document.querySelector('.sol');
let julgamento = document.querySelector('.julgamento');
let mundo = document.querySelector('.mundo');




btnRandomizar.addEventListener('click', () => {
    carregamento.style.display = 'block'
    louco.style.display = 'none';
    mago.style.display = 'none';
    sacerdotisa.style.display = 'none';
    imperatriz.style.display = 'none';
    imperador.style.display = 'none';
    papa.style.display = 'none';
    enamorados.style.display = 'none';
    carro.style.display = 'none';
    forca.style.display = 'none';
    eremita.style.display = 'none';
    roda.style.display = 'none';
    justica.style.display = 'none';
    enforcado.style.display = 'none';
    morte.style.display = 'none';
    temperanca.style.display = 'none';
    diabo.style.display = 'none';
    torre.style.display = 'none';
    estrela.style.display = 'none';
    luaa.style.display = 'none';
    soll.style.display = 'none';
    julgamento.style.display = 'none';
    mundo.style.display = 'none';

    let intevalo = setTimeout(()=>{
        carregamento.style.display = 'none'
        let numero = Math.floor(Math.random() * max);
        if(numero == 0 || numero == 22){
            louco.style.display = 'block'
        } else if(numero == 1){
            mago.style.display = 'block'
        } else if(numero == 2){
            sacerdotisa.style.display = 'block'
        } else if(numero == 3){
            imperatriz.style.display = 'block'
        } else if(numero == 4){
            imperador.style.display = 'block'
        } else if(numero == 5){
            papa.style.display = 'block'
        } else if(numero == 6){
            enamorados.style.display = 'block'
        } else if(numero == 7){
            carro.style.display = 'block'
        } else if(numero == 8){
            justica.style.display = 'block'
        } else if(numero == 9){
            eremita.style.display = 'block'
        } else if(numero == 10){
            roda.style.display = 'block'
        } else if(numero == 11){
            forca.style.display = 'block'
        } else if(numero == 12){
            enforcado.style.display = 'block'
        } else if(numero == 13){
            morte.style.display = 'block'
        } else if(numero == 14){
            temperanca.style.display = 'block'
        } else if(numero == 15){
            diabo.style.display = 'block'
        } else if(numero == 16){
            torre.style.display = 'block'
        } else if(numero == 17){
            estrela.style.display = 'block'
        } else if(numero == 18){
            luaa.style.display = 'block'
        } else if(numero == 19){
            soll.style.display = 'block'
        } else if(numero == 20){
            julgamento.style.display = 'block'
        } else if(numero == 21){
            mundo.style.display = 'block'
        }
    }, 2000)

    
})

// btnRandomizar.addEventListener('click', () => {
//     let numero = Math.floor(Math.random() * (max - min + 1)) + min;
//     randomizar.innerHTML = numero
// })