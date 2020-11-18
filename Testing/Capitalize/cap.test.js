// import { Capitalize } from './Capitalize'
// it('Capitalize', () => {
//     expect(capitalize('happy coding')).toBe('Happy coding')
// })

import { cap } from './cap';
describe('cap should return capitalized', () => {
    test('string should be capitalized', () => {
        const string = "happy";
        expect(cap(string)).toBe('Happy');
    });
});