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
function splitSentence() {





}

// Desafio 4
function concatName(a) {

    let first = a[0];
    let last = a[a.length - 1];

    let lastFist = (last + ', ' + first);

    return lastFist

}


// Desafio 5
function footballPoints() {
    // seu código aqui
}

// Desafio 6
function highestCount() {
    // seu código aqui
}

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