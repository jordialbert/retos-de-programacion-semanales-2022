const Polygon = require('./polygon');

class Triangle extends Polygon {
    constructor(width, height) {
        super(width, height, 'Triangle');
    }

    calculateArea() {
        return (this.width * this.height) / 2;
    }
}

module.exports = Triangle;
