export const analyse = (array) => {
  const calculateAvg = () => {
    const total = array.reduce((acc, c) => acc + c, 0);
    return total / array.length;
  };

  const minimum = () => {
    let min = Math.min(...array);
    return min;
  };
  const maximum = () => {
    let max = Math.max(...array);
    return max;
  };

  const length = () => {
    let length = array.length;
    return length;
  };

  if (Array.isArray(array) === true) {
    return {
      average: calculateAvg(),
      min: minimum(),
      max: maximum(),
      length: length(),
    };
  } else {
    throw Error('This is not a array');
  }
};
