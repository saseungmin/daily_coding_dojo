function find(tree, v) {
  if (tree[v] === v) {
    return v;
  }

  return find(tree, tree[v]);
}

function solution(n, costs) {
  const q = [];
  const tree = Array.from({ length: n }, (_, i) => i);

  [...costs].sort((a, b) => a[2] - b[2]).forEach((v) => {
    q.push({
      from: v[0],
      to: v[1],
      weight: v[2],
    });
  });

  let count = 0;
  let answer = 0;

  while (count < n - 1) {
    const { from, to, weight } = q.shift();

    if (find(tree, from) !== find(tree, to)) {
      const [x, y] = [find(tree, from), find(tree, to)];

      count += 1;
      tree[x] = y;
      answer += weight;
    }
  }

  return answer;
}

describe('섬 연결하기', () => {
  it('solution', () => {
    expect(solution(4, [
      [0, 1, 1],
      [0, 2, 2],
      [1, 2, 5],
      [1, 3, 1],
      [2, 3, 8],
    ])).toBe(4);
  });
});
