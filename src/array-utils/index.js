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

function verificaTriangulo(lado01, lado02, lado03) {
    lado01 = parseFloat(prompt(`Digite o primeiro lado: `));
    lado02 = parseFloat(prompt(`Digite o segundo lado: `));
    lado03 = parseFloat(prompt(`Digite o terceiro lado: `));

    if (lado01 + lado02 > lado03 && lado02 + lado03 > lado01 && lado03 + lado01 > lado02) {
        if (lado01 === lado02 && lado02 === lado03) {
            console.log(`O triângulo é Equilátero`);
        } else if ((lado01 === lado02) || (lado01 === lado03) || (lado02 == lado03)) {
            console.log(`O triângulo é Isóscele`);
        } else {
            console.log(`O triângulo é Escaleno`);
        }
    } else {
        console.log(`Não é um triângulo`);
    }
}

function numeroCrescente() {
    const valores = [120, 12, 2];
    valores.sort((a, b) => a - b);
    return valores;
}

function notasVestibular(port, mat, cg) {
    port = (prompt(`Digite a nota na disciplina de português: `));
    mat = (prompt(`Digite a nota na disciplina de matemática: `));
    cg = (prompt(`Digite a nota na disciplina de conhecimentos gerais: `));

    mediaGeral = (parseFloat(port) + parseFloat(mat) + parseFloat(cg)) / 3;

    console.log(`A sua média geral é: ${mediaGeral.toFixed(2)}`);
    if (mediaGeral > 7 && port > 5 && mat > 5 && cg > 5) {
        console.log(`Você foi aprovado`);
    } else {
        console.log(`Você foi reprovado`);
    }
}

function somaAB(a, b, c) {
    a = parseFloat(prompt(`Digite o valor de A: `));
    b = parseFloat(prompt(`Digite o valor de B: `));
    c = parseFloat(prompt(`Digite o valor de C: `));

    if((a + b) < c) {
        console.log(`A soma de A com B é menor que C`);
    } else if ((a + b) > c) {
        console.log(`A soma de A com B é maior que C`);
    } else {
        console.log(`A soma de A com B é igual à C`);
    }
}

function 



module.exports = {
    salarioPessoa, quantidadeLitros, escolaMatricula, verificaTriangulo, numeroCrescente, notasVestibular, somaAB
}


