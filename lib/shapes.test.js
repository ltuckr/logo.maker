
const { Circle, Triangle, Square } = require("./shapes");

describe("Triangle", () => {
    test("renders a triangle with the specified color", () => {
      const triangle = new Triangle("blue");
      expect(triangle.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  
//test code from class assignment
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe("Circle", () => {
    test("renders a circle with the specified color", () => {
      const circle = new Circle("red");
      expect(circle.render()).toBe(
        '<circle cx="150" cy="115" r="80" fill="red" />'
      );
    });
  
    test("renders a circle with the default color if no color is provided", () => {
      const circle = new Circle();
      expect(circle.render()).toBe('<circle cx="150" cy="115" r="80" fill="" />');
    });
  });