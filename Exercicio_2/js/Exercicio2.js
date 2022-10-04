const btnCalcResultado = document.querySelector('#btnCalcResultado');
const discliplinaG = document.querySelectorAll('.disciplinaGeral')
console.log(discliplinaG);

btnCalcResultado.addEventListener('click', function () {
    console.log('--Exercício 2--');
    console.log('');
    let mediaFinall = 0

    for (let i = 0; i < discliplinaG.length; i++) {
        let media1 = Number(discliplinaG[i].querySelector('.media1').textContent)
        let media2 = Number(discliplinaG[i].querySelector('.media2').textContent)
        mediaFinall = media1 * 0.4 + media2 * 0.6
        
        discliplinaG[i].querySelector('.mediaFinal').textContent = mediaFinall.toFixed(1)

        
    }
    
})