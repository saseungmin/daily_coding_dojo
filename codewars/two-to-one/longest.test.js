function longest(s1, s2) {
  const set = new Set();

  [s1, s2].forEach((s) => {
    for (let i = 0; i < s.length; i++) {
      set.add(s[i]);
    }
  });

  return [...set].sort().join('');
}
describe('longest', () => {
  it('Basic tests', () => {
    expect(longest('aretheyhere', 'yestheyarehere')).toBe('aehrsty');
    expect(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')).toBe('abcdefghilnoprstu');
    expect(longest('inmanylanguages', 'theresapairoffunctions')).toBe('acefghilmnoprstuy');
  });
});
