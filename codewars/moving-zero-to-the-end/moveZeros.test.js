function moveZeros(arr) {
  return arr.filter((value) => value !== 0).concat(arr.filter((value) => value === 0));
}

describe('moveZeros', () => {
  it('test', () => {
    expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']))
      .toEqual([false, 1, 1, 2, 1, 3, 'a', 0, 0]);
  });
});
