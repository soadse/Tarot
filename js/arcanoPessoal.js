let agora = new Date();
let agoraAno = agora.getFullYear();
let bd = document.body;
let dia = document.getElementById('dia');
let mes = document.getElementById('mes');
let ano = document.getElementById('ano');
let erro = document.getElementById('erro');
let arcano = document.getElementById('arcano');
let calcular = document.getElementById('calcular');

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

document.getElementById('data').addEventListener('submit', (e) => {
    e.preventDefault()
});

calcular.addEventListener('click', () => {
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

    let diaValor = dia.value // pega o valor do input
    let mesValor = mes.value 
    let anoValor = ano.value

    // validação da data
    if(diaValor > 31 || diaValor <= 0){
        erro.innerHTML = 'Digite um dia entre 1 e 31'
        arcano.innerHTML = ''
    } else if(mesValor > 12 || mesValor <= 0){
        erro.innerHTML = 'Digite um mês entre 1 e 12'
        arcano.innerHTML = ''
    } else if(anoValor > agoraAno){
        erro.innerHTML = `Ano superior ao atual: ${agoraAno}`
        arcano.innerHTML = ''
    } else if(anoValor.length > 0 && anoValor.length < 4 || anoValor <= 0){
        erro.innerHTML = `Ano ${anoValor} não permitido`
        arcano.innerHTML = ''
    } else if(diaValor.includes('.') || diaValor.includes(',') || mesValor.includes('.') || mesValor.includes(',') || anoValor.includes('.') || anoValor.includes(',')){
        erro.innerHTML = 'Caracteres especias não permitido'
        arcano.innerHTML = ''
    } else {
        // bloco para desmenbrar a variável e tranformar ela em um array
        let arrayDia = diaValor.toString().split('').map(Number) 
        let arrayMes = mesValor.toString().split('').map(Number)
        let arrayAno = anoValor.toString().split('').map(Number)
        // bloco para remover qualquer zero que esteja dentro da variável
        let removeZeroDia = arrayDia.filter(elemento => elemento !== 0)
        let removeZeroMes = arrayMes.filter(elemento => elemento !== 0)
        let removeZeroAno = arrayAno.filter(elemento => elemento !== 0)
        // bloco para ajuntar as arrays em uma unica lista de array
        let total = [removeZeroDia, removeZeroMes, removeZeroAno]
        let arrayTotal = [].concat(...total) // para concatenar uma lista de array em um unico array
        // bloco para somar os valores das arrays
        let somaTotal = arrayTotal.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
        arcano.innerHTML = `O número do seu arcano pessoal é: ${somaTotal}`

        if(somaTotal == 0){
            louco.style.display = 'block'
        } else if(somaTotal == 1){
            mago.style.display = 'block'
        } else if(somaTotal == 2){
            sacerdotisa.style.display = 'block'
        } else if(somaTotal == 3){
            imperatriz.style.display = 'block'
        } else if(somaTotal == 4){
            imperador.style.display = 'block'
        } else if(somaTotal == 5){
            papa.style.display = 'block'
        } else if(somaTotal == 6){
            enamorados.style.display = 'block'
        } else if(somaTotal == 7){
            carro.style.display = 'block'
        } else if(somaTotal == 8){
            justica.style.display = 'block'
        } else if(somaTotal == 9){
            eremita.style.display = 'block'
        } else if(somaTotal == 10){
            roda.style.display = 'block'
        } else if(somaTotal == 11){
            forca.style.display = 'block'
        } else if(somaTotal == 12){
            enforcado.style.display = 'block'
        } else if(somaTotal == 13){
            morte.style.display = 'block'
        } else if(somaTotal == 14){
            temperanca.style.display = 'block'
        } else if(somaTotal == 15){
            diabo.style.display = 'block'
        } else if(somaTotal == 16){
            torre.style.display = 'block'
        } else if(somaTotal == 17){
            estrela.style.display = 'block'
        } else if(somaTotal == 18){
            luaa.style.display = 'block'
        } else if(somaTotal == 19){
            soll.style.display = 'block'
        } else if(somaTotal == 20){
            julgamento.style.display = 'block'
        } else if(somaTotal == 21){
            mundo.style.display = 'block'
        } else if(somaTotal == 22){
            louco.style.display = 'block'
        }

        // soma da data se o total passar de 22
        if(somaTotal > 22) {
            let teste = somaTotal.toString().split('').map(Number) // converte para string para depois transformar em um array e por final ele converte para um número
            let arrayTeste = teste.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
            arcano.innerHTML = `O número do seu arcano pessoal é: ${arrayTeste}`

            if(arrayTeste == 0){
                louco.style.display = 'block'
            } else if(arrayTeste == 1){
                mago.style.display = 'block'
            } else if(arrayTeste == 2){
                sacerdotisa.style.display = 'block'
            } else if(arrayTeste == 3){
                imperatriz.style.display = 'block'
            } else if(arrayTeste == 4){
                imperador.style.display = 'block'
            } else if(arrayTeste == 5){
                papa.style.display = 'block'
            } else if(arrayTeste == 6){
                enamorados.style.display = 'block'
            } else if(arrayTeste == 7){
                carro.style.display = 'block'
            } else if(arrayTeste == 8){
                justica.style.display = 'block'
            } else if(arrayTeste == 9){
                eremita.style.display = 'block'
            } else if(arrayTeste == 10){
                roda.style.display = 'block'
            } else if(arrayTeste == 11){
                forca.style.display = 'block'
            } else if(arrayTeste == 12){
                enforcado.style.display = 'block'
            } else if(arrayTeste == 13){
                morte.style.display = 'block'
            } else if(arrayTeste == 14){
                temperanca.style.display = 'block'
            } else if(arrayTeste == 15){
                diabo.style.display = 'block'
            } else if(arrayTeste == 16){
                torre.style.display = 'block'
            } else if(arrayTeste == 17){
                estrela.style.display = 'block'
            } else if(arrayTeste == 18){
                luaa.style.display = 'block'
            } else if(arrayTeste == 19){
                soll.style.display = 'block'
            } else if(arrayTeste == 20){
                julgamento.style.display = 'block'
            } else if(arrayTeste == 21){
                mundo.style.display = 'block'
            } else if(arrayTeste == 22){
                louco.style.display = 'block'
            }
        }
        erro.innerHTML = ''
        // dia.value = ''
        // mes.value = ''
        // ano.value = ''
    }
});
