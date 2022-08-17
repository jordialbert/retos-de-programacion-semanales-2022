/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function main() {
    for (let index = 0; index <= 100; index++) {
        if (isPrimeNumber(index)) {
            console.log(index);
        }
    }
}

function isPrimeNumber(number) {
    console.log(number);
}

module.exports = isPrimeNumber