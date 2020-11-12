export const calculator = {
  add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 + num2;
    } else {
      throw new Error('This is not a number');
    }
  },
  subtract(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 - num2;
    } else {
      throw new Error('This is not a number');
    }
  },
  divide(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 / num2;
    } else {
      throw new Error('This is not a number');
    }
  },
  multiply(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 * num2;
    } else {
      throw new Error('This is not a number');
    }
  },
};
