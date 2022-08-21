const Polygon = require('./polygon');

class Rectangle extends Polygon {
    constructor(width, height) {
        super(width, height, 'Rectangle');
    }

    calculateArea() {
        return this.width * this.height;
    }
}

module.exports = Rectangle;
