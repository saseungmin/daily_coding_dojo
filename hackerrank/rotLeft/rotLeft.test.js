function rotLeft(a, d) {
  // Write your code here
  const queue = [...a];

  for (let i = 0; i < d; i++) {
    const q = queue.shift();

    queue.push(q);
  }

  return queue;
}

describe('rotLeft', () => {
  it('rotLeft', () => {
    expect(rotLeft([1, 2, 3, 4, 5], 4)).toEqual([5, 1, 2, 3, 4]);
  });
});
