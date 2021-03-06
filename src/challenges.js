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

    if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
        return 'cat1';
    } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
        return 'cat2';
    } else {
        return 'os gatos trombam e o rato foge';
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
            output.push('bug!');
        }
    }
    return output;
}

// Desafio 9
function encode(a) {

    let encode = '';

    for (index = 0; index < a.length; index += 1) {

        if (a[index] === 'a') {
            encode = encode + '1';
        } else if (a[index] === 'e') {
            encode = encode + '2';
        } else if (a[index] === 'i') {
            encode = encode + '3';
        } else if (a[index] === 'o') {
            encode = encode + '4';
        } else if (a[index] === 'u') {
            encode = encode + '5';
        } else {
            encode = encode + (a[index]);
        }
    }
    return encode;
}

function decode(b) {

    let decode = '';

    for (index = 0; index < b.length; index += 1) {

        if (b[index] === '1') {
            decode = decode + 'a';
        } else if (b[index] === '2') {
            decode = decode + 'e';
        } else if (b[index] === '3') {
            decode = decode + 'i';
        } else if (b[index] === '4') {
            decode = decode + 'o';
        } else if (b[index] === '5') {
            decode = decode + 'u';
        } else {
            decode = decode + (b[index]);
        }
    }
    return decode;
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