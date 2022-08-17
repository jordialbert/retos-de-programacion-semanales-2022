/*
 * Challenge #3
 * IS IT A PRIME NUMBER?
 * Level: MEDIUM
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

main()

function main() {
    for (let index = 1; index <= 100; index++) {
        if (isPrimeNumber(index)) {
            console.log(index);
        }
    }
}

function isPrimeNumber(number) {
    if (number < 2) {
        return false
    }

    squareRoot = Math.floor(Math.sqrt(number));

    for (let index = squareRoot; index >= 2; index--) {
        if ((number % index) === 0) {
            return false
        }
    }

    return true
}

module.exports = isPrimeNumber
