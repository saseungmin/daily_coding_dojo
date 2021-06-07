function highAndLow(numbers) {
  const numArr = numbers.split(' ');

  return [Math.max(...numArr), Math.min(...numArr)].join(' ');
}

describe('highAndLow', () => {
  it('Basic tests', () => {
    expect(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')).toBe('542 -214');
  });
});
