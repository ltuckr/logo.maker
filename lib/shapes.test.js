//shapes testing
const { Circle, Triangle, Square } = require("./shapes");

describe("Triangle", () => {
    test("renders a triangle with the specified color", () => {
      const triangle = new Triangle("blue");
      expect(triangle.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
});

describe("Circle", () => {
    test("renders a circle with the specified color", () => {
      const circle = new Circle("blue");
      expect(circle.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="blue" />'
      );
    });
  
    test("renders a circle with the default color if no color is provided", () => {
      const circle = new Circle();
      expect(circle.render()).toEqual('<circle cx="150" cy="115" r="80" fill="" />');
    });
});

describe("Square", () => {
    test("renders a square with the specified color", () => {
      const square = new Square("blue");
      expect(square.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="blue" />'
      );
    });
  
    test("renders a square with the default color if no color is provided", () => {
      const square = new Square();
      expect(square.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="" />'
      );
    });
});
