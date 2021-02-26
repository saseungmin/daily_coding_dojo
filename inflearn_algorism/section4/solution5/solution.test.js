function solution(n, k, card) {
  const result = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let s = j + 1; s < n; s++) {
        result.add(card[i] + card[j] + card[s]);
      }
    }
  }

  const answer = [...result].sort((a, b) => b - a);

  return answer[k - 1];
}

describe('solution', () => {
  it('K-th largest number of three whole numbers added', () => {
    const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

    expect(solution(10, 3, arr)).toEqual(143);
  });
});
