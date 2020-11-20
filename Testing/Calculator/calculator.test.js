const calculate = require("./calculator");

test("adds", () => {
    expect(calculate.add(1, 2)).toBe(3);
});

test("subtracts", () => {
    expect(calculate.subtract(5, 2)).toBe(3);
});

test("multiplies", () => {
    expect(calculate.multiply(3, 3)).toBe(9);
});

test("divides", () => {
    expect(calculate.divide(10, 2)).toBe(5);
});