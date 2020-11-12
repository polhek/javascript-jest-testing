import { ceasarCipher } from './ceasarCipher';

describe('ceasarCipher', () => {
  test('Test for if cypher works', () => {
    const insertedString = 'defend the east wall of the castle';
    const expectedResult = 'efgfoe uif fbtu xbmm pg uif dbtumf';
    const key = 1;
    const result = ceasarCipher(insertedString, key);
    expect(result).toBe(expectedResult);
  });
  test('uppercase strings', () => {
    const insertedString = 'DEFEND';
    const expectedResult = 'EFGFOE';
    const key = 1;
    const result = ceasarCipher(insertedString, key);
    expect(result).toBe(expectedResult);
  });
  test('punctuation', () => {
    const insertedString = 'DEFEND, defend.';
    const expectedResult = 'EFGFOE, efgfoe.';
    const key = 1;
    const result = ceasarCipher(insertedString, key);
    expect(result).toBe(expectedResult);
  });
});
