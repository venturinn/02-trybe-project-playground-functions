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
function highestCount() {

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

a = [9, 15, 2, 3, 9, 15, 7, 9, 15];

highestCount(a);




// Desafio 7
function catAndMouse() {
    // seu código aqui
}

// Desafio 8
function fizzBuzz() {
    // seu código aqui
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