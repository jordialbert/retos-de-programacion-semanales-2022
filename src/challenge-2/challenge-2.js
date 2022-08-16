/*
 * Challenge #2
 * LA SUCESIÓN DE FIBONACCI
 * Level: HARD
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 */

main()

function main() {
    fibonacciSeries = fibonacci(50)
    fibonacciSeries.forEach(element => {
        console.log(element);
    });
}

function fibonacci(fibonacciNumbers) {
    let num1 = 0
    let num2 = 1
    let tempNum = 0
    let fibonacciSeries = []

    for (let index = 0; index < fibonacciNumbers; index++) {
        fibonacciSeries.push(num1);
        tempNum = num1;
        num1 = num2;
        num2 = tempNum + num2;
    }

    return fibonacciSeries
}

module.exports = fibonacci
