/*
 * Challenge #0
 * "FIZZ BUZZ"
 * Level: EASY
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

main()

function main() {
    for (let index = 1; index <= 100; index++) {
        console.log(fizzbuzz(index));
    }
}

function fizzbuzz(number) {
    if ((number % 3) === 0 && (number % 5) === 0) {
        return "FizzBuzz"
    }

    if ((number % 3) === 0) {
        return "Fizz"
    }

    if ((number % 5) === 0) {
        return "Buzz"
    }

    return number;
}

module.exports = fizzbuzz;