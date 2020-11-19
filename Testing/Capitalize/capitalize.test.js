import { capitalize } from './capitalize';
describe('capitalize should return capitalized', () => {
    test('string should be capitalized', () => {
        const string = "happy";
        expect(capitalize(string)).toBe('Happy');
    });
});