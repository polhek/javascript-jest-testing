import { calculator } from './calculator';

describe('calculator object with simple add, subtract, divide, and multiply.', () => {
  test('If input is not a number, it should throw error', () => {
    let number1 = 123;
    let string = 'string';
    expect(() => {
      calculator.add(number1, string);
    }).toThrowError('This is not a number');
  });
  test('It should sum two numbesr', () => {
    let number1 = 123;
    let string = 'string';
    expect(() => {
      calculator.add(number1, string);
    }).toThrowError('This is not a number');
  });
  test('It should subtract two numbers', () => {
    let number1 = 12;
    let number2 = 6;
    let expectedResult = 6;
    let result = calculator.subtract(number1, number2);
    expect(result).toBe(expectedResult);
  });
  test('It should divide two numbers', () => {
    let number1 = 12;
    let number2 = 6;
    let expectedResult = 2;
    let result = calculator.divide(number1, number2);
    expect(result).toBe(expectedResult);
  });
  test('It should multiply two numbers', () => {
    let number1 = 12;
    let number2 = 6;
    let expectedResult = 6 * 12;
    let result = calculator.multiply(number1, number2);
    expect(result).toBe(expectedResult);
  });
});
