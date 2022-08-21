const Polygon = require('./polygon');

class Square extends Polygon {
    constructor(width, height) {
        super(width, height, 'Square');
    }

    calculateArea() {
        return this.width * this.height;
    }
}

module.exports = Square;
