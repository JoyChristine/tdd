// const analysis = require("./array");

// test("average", () => {
//     expect(analysis.average(10, 20, 30)).toBe(20);
// })
// test("mini", () => {
//     expect(analysis.min(10, 20, 30)).toBe(10);
// });
// test("maxi", () => {
//     expect(analysis.max(10, 20, 30)).toBe(30);
// });
// test("lengt", () => {
//     expect(analysis.length(10, 20, 30)).toBe(3);
// });
import analysis from './array';

it('analyze array', () => {
    expect(analysis([0, 3, 4, 6, 7, 2, 1]))
        .toEqual({
            average: 3,
            min: 0,
            max: 7,
            length: 7
        })
})