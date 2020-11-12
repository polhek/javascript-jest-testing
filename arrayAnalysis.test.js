import { analyse } from './arrayAnalysis';

describe('Analyse should return average, min, max, length of array', () => {
  test('Analyse should only return if input is array, else throw error', () => {
    const badInput = 2321;
    expect(() => {
      analyse(badInput);
    }).toThrowError('This is not a array');
  });
  test('Analyse should only return if input is array, else throw error', () => {
    const badInput = 'fnajsdnfjsdn';
    expect(() => {
      analyse(badInput);
    }).toThrowError('This is not a array');
  });
  test('If input array, calculate avg, min, max, length of array', () => {
    const resArray = [1, 8, 3, 4, 2, 6];
    const result = analyse(resArray);
    let expectedResult = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };
    expect(result).toMatchObject(expectedResult);
  });
});

// const resArray = [1, 8, 3, 4, 2, 6];
