const calc = require("./calculator");

test("adds", () => {
    expect(calc.add(1, 2)).toBe(3);
});

test("subtracts", () => {
    expect(calc.subtract(5, 2)).toBe(3);
});

test("multiplies", () => {
    expect(calc.multiply(3, 3)).toBe(9);
});

test("divides", () => {
    expect(calc.divide(10, 2)).toBe(5);
});