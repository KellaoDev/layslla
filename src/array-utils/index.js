const prompt = require(`prompt-sync`)()

function salarioPessoa(salarioBruto, salarioLiquido, previdenciaSocial, posPrevidencia, tarifa) {
    salarioBruto = parseFloat(prompt(`Digite o seu salário bruto: `));
    previdenciaSocial = salarioBruto * 0.1;
    posPrevidencia = salarioBruto - previdenciaSocial;
    tarifa = posPrevidencia * 0.05;
    salarioLiquido = posPrevidencia - tarifa;

    return salarioLiquido;
}

function quantidadeLitros(tempo, distancia, velo, litrosUtilizados) {
    tempo = parseFloat(prompt(`Digite o tempo gasto da viagem (hrs): `));
    velo = parseFloat(prompt(`Digite a velocidade média da viagem (hrs): `));
    distancia = (tempo * velo);
    litrosUtilizados = (distancia / 12);

    console.log(`Velocidade média da viagem: ${velo.toFixed(2)} Km/h`);
    console.log(`Tempo gasto na viagem: ${tempo.toFixed(2)} Hrs`);
    console.log(`Distância percorrida: ${distancia.toFixed(2)} Kms`);
    console.log(`Quantidade de litros utilizada na viagem: ${litrosUtilizados.toFixed(2)} Lts`);
}

function escolaMatricula(codigo, semestre, ano, ordenacao) {
    codigo = String(prompt(`Digite o seu codigo de matrícula (AASDDD): `));
    ano = codigo.substring(-1, 2);
    semestre = codigo.substring(1, 3) == `1` ? `1` : `2`;
    ordenacao = codigo.substring(3, 6);

    console.log(`O ano e o semestre de matrícula está no formato(AASDDD): ` + ano + semestre + ordenacao);
}


module.exports = {
    salarioPessoa, quantidadeLitros, escolaMatricula
}


/*

4. Dados três números, verifique se eles podem representar as medidas dos lados de um triângulo e, se puderem, classificar
o triângulo em equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3 lados diferentes).
Propriedade – o comprimento de cada lado de um triângulo é menor do que a soma dos comprimentos dos outros dois lados.
• Definição 1 - chama-se de triângulo equilátero o que tem os comprimentos dos três lados iguais;
• Definição 2 - chama-se de triângulo isóscele o triângulo que tem os comprimentos de dois lados iguais;
• Definição 3 - chama-se triângulo escaleno o triângulo que tem os comprimentos dos três lados diferentes.*/