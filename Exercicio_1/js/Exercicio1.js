console.log('--Exercício 1--');
console.log('       ');

const btnGerarDados = document.querySelector('#btnGerarDados');

btnGerarDados.addEventListener('click', function () {

    const diaMes = document.querySelectorAll('.diaMes');
    const random = parseInt(Math.random() * 31 + 1) //estabelece o limite até onde vai o número
    console.log(`Número aleatório é: ${random}`);
    console.log('         ');
    
    console.log('Os dias que caem na Quarta-feira são:');
    for (let i = 0; i < diaMes.length; i++) {
        if(diaMes[i].classList.contains('qua')) {
            console.log('° ' + diaMes[i].textContent)
        }
    }
    console.log('         ');

    for (let i = 0; i < diaMes.length; i++) {

        if (diaMes[i].textContent != "" && Number(diaMes[i].textContent) % 2 == 0) {
            diaMes[i].classList.add('bg-light')
        } else if (diaMes[i].textContent != "" && Number(diaMes[i].textContent) % 2 != 0) {
            diaMes[i].classList.add('bg-warning')
        } else {
            diaMes[i].classList.add('bg-dark')
        }
        if (Number(diaMes[i].textContent) === random) {
            diaMes[i].textContent = 'FERIADO'
            diaMes[i].classList.add('lead')
        }

    }

    
})