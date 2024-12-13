let agora = new Date();
let agoraAno = agora.getFullYear();
let bd = document.body
let dia = document.getElementById('dia')
let mes = document.getElementById('mes')
let ano = document.getElementById('ano')
let soma = [dia, mes, ano]
let erro = document.getElementById('erro')
let arcano = document.getElementById('arcano')
let calcular = document.getElementById('calcular')

document.getElementById('data').addEventListener('submit', (e) => {
    e.preventDefault()
})

calcular.addEventListener('click', () => {
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
    } else {
        
        // bloco para desmenbrar a variável e tranformar ela em um array
        let arrayDia = diaValor.split('').map(Number) 
        let arrayMes = mesValor.split('').map(Number)
        let arrayAno = anoValor.split('').map(Number)
        let total = [arrayDia, arrayMes, arrayAno]
        let arrayTotal = [].concat(...total) // para concatenar uma lista de array em um unico array

        // bloco para somar os valores das arrays
        let somaTotal = arrayTotal.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)

        // soma da data se o total passar de 22
        if(somaTotal > 22) {
            let teste = somaTotal.toString().split('').map(Number) // converte para string para depois transformar em um array e por final ele converte para um número
            let arrayTeste = teste.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
            arcano.innerHTML = arrayTeste
        }
        erro.innerHTML = ''
    }
})
