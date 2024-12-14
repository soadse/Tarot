let btnRandomizar = document.getElementById('btnRandomizar')
let randomizar = document.getElementById('randomizar')
let min = 0
let max = 22




btnRandomizar.addEventListener('click', () => {
    let numero = Math.floor(Math.random() * max);
    randomizar.innerHTML = numero
})

// btnRandomizar.addEventListener('click', () => {
//     let numero = Math.floor(Math.random() * (max - min + 1)) + min;
//     randomizar.innerHTML = numero
// })