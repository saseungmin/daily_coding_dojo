const digitsSum = (number) => {
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += parseInt(number[i], 10);
  }

  return sum;
};

function solution(_, arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let maxNumber = Number.MIN_SAFE_INTEGER;

  arr.forEach((number) => {
    const sum = digitsSum(number.toString());

    if (sum > maxSum) {
      maxSum = sum;
      maxNumber = number;
    }

    if (sum === maxSum && number > maxNumber) {
      maxNumber = number;
    }
  });

  return maxNumber;
}

describe('solution', () => {
  it('The largest natural number of the sum of each digit', () => {
    expect(solution(7, [128, 460, 603, 40, 521, 137, 123])).toBe(137);
  });
});
