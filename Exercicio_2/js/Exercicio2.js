console.log('--Exercício 2--');
    console.log('');

const btnCalcResultado = document.querySelector('#btnCalcResultado');
const discliplinaG = document.querySelectorAll('.disciplinaGeral')
console.log(discliplinaG);

btnCalcResultado.addEventListener('click', function () {
    
    let mediaFinall = 0

    for (let i = 0; i < discliplinaG.length; i++) {
        let media1 = Number(discliplinaG[i].querySelector('.media1').textContent)
        let media2 = Number(discliplinaG[i].querySelector('.media2').textContent)
        mediaFinall = media1 * 0.4 + media2 * 0.6
        
        discliplinaG[i].querySelector('.mediaFinal').textContent = mediaFinall.toFixed(1)

        if(mediaFinall >= 6) {
            discliplinaG[i].querySelector('.resultadoFinal').textContent = 'Aprovado'
            discliplinaG[i].querySelector('.resultadoFinal').classList.add('text-bg-success')
        }
        else if(mediaFinall >=4 && mediaFinall < 6) {
            discliplinaG[i].querySelector('.resultadoFinal').textContent = 'Exame'
            discliplinaG[i].querySelector('.resultadoFinal').classList.add('text-bg-warning')
        }
        else {
            discliplinaG[i].querySelector('.resultadoFinal').textContent = 'Reprovado'
            discliplinaG[i].querySelector('.resultadoFinal').classList.add('text-bg-danger')
        }
    }
    
})