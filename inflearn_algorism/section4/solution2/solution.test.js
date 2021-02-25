const reverse = (number) => parseInt(number
  .toString()
  .split('')
  .reverse()
  .join(''), 10);

const isPrimeNumber = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const primeNumbers = (primes, number) => {
  const reverseNumber = reverse(number);

  if (isPrimeNumber(reverseNumber)) {
    return [
      ...primes,
      reverseNumber,
    ];
  }

  return primes;
};

function solution(_, arr) {
  // const result = [];

  // arr.forEach((number) => {
  //   const reverseNumber = reverse(number);

  //   if (isPrimeNumber(reverseNumber)) {
  //     result.push(reverseNumber);
  //   }
  // });

  return arr.reduce(primeNumbers, []);

  // return result;
}

describe('solution', () => {
  it('The largest natural number of the sum of each digit', () => {
    const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

    expect(solution(9, arr)).toEqual([23, 2, 73, 2, 3]);
  });
});

describe('reverseNumber', () => {
  it('reverse Numbers', () => {
    expect(reverse('123')).toBe(321);
  });
});

describe('isPrimeNumber', () => {
  it('With prime number', () => {
    expect(isPrimeNumber(23)).toBeTruthy();
  });

  it('without prime number', () => {
    expect(isPrimeNumber(22)).toBeFalsy();
  });
});
