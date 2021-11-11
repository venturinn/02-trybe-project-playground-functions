// Desafio 1
function compareTrue(a, b) {

    if (a === true && b === true) {
        return true;
    } else {
        return false;
    }
}

// Desafio 2
function calcArea(base, height) {

    return (base * height) / 2;

}

// Desafio 3


function splitSentence(a) {

    let splitString = a.split(" ");
    return splitString

}

// Desafio 4
function concatName(a) {

    let first = a[0];
    let last = a[a.length - 1];
    let lastFist = (last + ', ' + first);

    return lastFist
}


// Desafio 5
function footballPoints(wins, ties) {

    let points = ((wins * 3) + ties);

    return points
}

// Desafio 6
function highestCount(a) {

    // Descobrindo o maior valor do array:

    let highestValue = 0;
    let highestPosition = 0;
    for (let index = 0; index < a.length; index += 1) {
        if (a[index] >= a[highestPosition]) {
            highestValue = a[index];
            highestPosition = index;
        }
    }
    // Descobrindo as repetições do maior valor:

    let countRepetitions = 0;
    for (let index2 = 0; index2 < a.length; index2 += 1) {
        if (a[index2] === highestValue) {
            countRepetitions = countRepetitions + 1;
        }
    }

    return countRepetitions;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

    if ((cat1 - mouse) < (cat2 - mouse)) {
        return 'cat1';
    } else if ((cat1 - mouse) > (cat2 - mouse)) {
        return 'cat2';
    } else {
        return 'Temos um empate aqui!'
    }
}

// Desafio 8
function fizzBuzz(a) {

    let output = [];

    for (index = 0; index < a.length; index += 1) {

        if (a[index] % 3 === 0 && a[index] % 5 === 0) {
            output.push('fizzBuzz');
        } else if (a[index] % 3 === 0) {
            output.push('fizz');
        } else if (a[index] % 5 === 0) {
            output.push('buzz');
        } else {
            output.push('bug');
        }
    }
    return output;
}

// Desafio 9
function encode() {
    // seu código aqui
}

function decode() {
    // seu código aqui
}

module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
};