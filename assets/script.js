const calc = document.getElementById('calcular');




function imc() {

    const nome = document.getElementById('nome').value;
    const alt = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const result = document.getElementById('resultado')

    if (nome !== '' && alt !== '' && peso !== '') {
        const vlrIMC = (peso / (alt * alt)).toFixed(1);
        result.textContent = vlrIMC;

        let classification = '';

        if (vlrIMC < 18.5) {
            classification = 'abaixo do peso'
        } else if (vlrIMC < 25) {
            classification = 'com peso ideal. PARABÉNS!!!'
        } else if (vlrIMC < 30) {
            classification = 'levemente acima do peso'
        } else if (vlrIMC < 35) {
            classification = 'obesidade leve'
        } else if (vlrIMC < 40) {
            classification = 'obesidade preocupante'
        } else {
            classification = 'obesidade morbida'
        }
        result.textContent = `${nome} seu IMC é ${vlrIMC} você está ${classification}`
    } else {
        result.textContent = 'Preencha todos os campos'
    }

}
calc.addEventListener('click', imc)