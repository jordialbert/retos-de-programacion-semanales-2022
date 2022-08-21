/*
 * Challenge #4
 * AREA OF A POLYGON
 * Level: EASY
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const Rectangle = require("./rectangle");
const Square = require("./square");
const Triangle = require("./triangle");

main();

function main() {
    const rectangle = new Rectangle(4, 6);
    const square = new Square(2, 2);
    const triangle = new Triangle(5, 10);

    console.log(calculatePolygonArea(rectangle));
    console.log(calculatePolygonArea(square));
    console.log(calculatePolygonArea(triangle));
}

function calculatePolygonArea(polygon) {
    return `${polygon.type} area is ${polygon.calculateArea()}`;
}

module.exports = calculatePolygonArea;
