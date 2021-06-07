function createPhoneNumber(numbers) {
  const regexp = /([0-9]{3})([0-9]{3})([0-9]{4})/;
  return numbers.join('').replace(regexp, '($1) $2-$3');
}

// function createPhoneNumber(numbers) {
//   return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
// }

describe('createPhoneNumber', () => {
  it('test', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890');
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe('(111) 111-1111');
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890');
  });
});
