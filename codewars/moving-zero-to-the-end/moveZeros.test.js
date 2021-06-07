function moveZeros(arr) {
  const noneZeroValues = arr.filter((value) => value !== 0);
  const answer = [...noneZeroValues];

  for (let i = 0; i < arr.length - noneZeroValues.length; i++) {
    answer.push(0);
  }

  return answer;
}

describe('moveZeros', () => {
  it('test', () => {
    expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']))
      .toEqual([false, 1, 1, 2, 1, 3, 'a', 0, 0]);
  });
});
