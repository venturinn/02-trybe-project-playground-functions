// Desafio 10
function techList(a, b) {


    if (a.length === 0) {
        return 'Vazio!'
    } else {

        a.sort();
        let output = [];

        for (let index = 0; index < a.length; index += 1) {

            output.push({ tech: a[index], name: b });

        }
        return output
    }

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
        return 'Array com tamanho incorreto.';
    } else if (negativeNumeber === true) {
        return 'não é possível gerar um número de telefone com esses valores';
    } else {
        return ('(' + a[0] + a[1] + ') ' + a[2] + a[3] + a[4] + a[5] + a[6] + '-' + a[7] + a[8] + a[9] + a[10]);
    }
}

// Desafio 12
function triangleCheck(a, b, c) {

    if (a > b + c || b > a + c || c > a + b) {
        return false
    } else if (a < Math.abs(b - c) || b < Math.abs(a - c) || c < Math.abs(a - b)) {
        return false
    } else {
        return true
    }
}

// Desafio 13

// Referências usadas para extrair números de strings:
// https://www.w3schools.com/jsref/jsref_regexp_digit.asp
// https://www.w3schools.com/jsref/jsref_regexp_onemore.asp

// Referência de como converter String para Inteiro:
// https://pt.stackoverflow.com/questions/134453/como-converter-uma-string-para-int-em-javascript


function hydrate(a) {


    let inteiros = (a.match(/\d+/g));
    let all = 0;

    for (let index in inteiros) {
        all = all + Number(inteiros[index]);
    }

    if (all === 1) {
        return (all + ' copo de água');
    } else {
        return (all + ' copos de água');

    }

}





module.exports = {
    generatePhoneNumber,
    techList,
    hydrate,
    triangleCheck,
};