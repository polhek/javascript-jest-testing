import { reverseString } from './reverseString';

describe('reverseString should return reversed string', () => {
  test('should check if input is a string, if not throw ""', () => {
    const number = 123;
    expect(reverseString(number)).toBe(null);
  });
  test('if input is string it should be reversed', () => {
    const string = 'jozef';
    expect(reverseString(string)).toBe('fezoj');
  });
});
