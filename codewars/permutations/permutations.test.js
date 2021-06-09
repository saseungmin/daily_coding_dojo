function permutations(string) {
  const answer = new Set();
  const s = string.split('');

  const len = s.length;
  const check = Array.from({ length: len }, () => false);
  const dp = Array.from({ length: len }, () => 0);

  function dfs(level) {
    if (level === len) {
      answer.add(dp.slice().join(''));
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!check[i]) {
        dp[level] = s[i];
        check[i] = true;

        dfs(level + 1);

        check[i] = false;
      }
    }
  }

  dfs(0);

  return [...answer].sort();
}

// function permutations(str) {
//   return (str.length <= 1) ? [str]
//     : Array.from(new Set(
//       str.split('')
//         .map(
//           (char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map((p) => char + p),
//         )
//         .reduce((r, x) => r.concat(x), []),
//     ));
// }

describe('permutations', () => {
  it('Basic tests', () => {
    expect(permutations('a')).toEqual(['a']);
    expect(permutations('ab')).toEqual(['ab', 'ba']);
    expect(permutations('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
  });
});
