import { capitalizeString } from './capitalizeString';

describe('capitalizeString should be returned capitalized', () => {
  test('string should be capitalized', () => {
    const string = 'desktop';
    expect(capitalizeString(string)).toBe('Desktop');
  });
  test('return nothing if input is not a string', () => {
    const number = 14;
    expect(capitalizeString(number)).toBe('');
  });
});
