// Desafio 10
function techList() {
    // seu código aqui
}

// Desafio 11

function generatePhoneNumber(a) {

    // Verificando se tem números negativos ou maiores do que 9:

    let negativeNumeber = false;

    for (let index in a) {
        if (a[index] < 0 || a[index] > 9) {
            negativeNumeber = true
        }
    }

    // Verificando se o número se repete mais de 3 vezes:

    let repitCount = 0;
    for (let index = 0; index < a.length; index += 1) {

        if (repitCount >= 3) {
            negativeNumeber = true;
        } else {

            repitCount = 0;

            for (let index2 = 0; index2 < a.length; index2 += 1) {
                if (a[index] === a[index2]) {
                    repitCount = repitCount + 1;
                }
            }
        }
    }

    // Seguindo com código:

    if (a.length != 11) {
        return 'Array com tamanho incorreto';
    } else if (negativeNumeber === true) {
        return 'não é possível gerar um número de telefone com esses valores';
    } else {
        return ('(' + a[0] + a[1] + ') ' + a[2] + a[3] + a[4] + a[5] + a[6] + '-' + a[7] + a[8] + a[9] + a[10]);
    }
}

// Desafio 12
function triangleCheck() {
    // seu código aqui
}

// Desafio 13
function hydrate() {
    // seu código aqui
}

module.exports = {
    generatePhoneNumber,
    techList,
    hydrate,
    triangleCheck,
};