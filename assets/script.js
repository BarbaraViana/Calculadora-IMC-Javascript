const calc = document.getElementById('calcular');




function imc() {

    const nome = document.getElementById('nome').value;
    const alt = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const result = document.getElementById('resultado')

    if (nome.value !== '' && alt !== '' && peso !== '') {
        alert('Valor preenchido')
    } else {
        alt('Preencha todos os campos')
    }

}
calc.addEventListener('click', imc)