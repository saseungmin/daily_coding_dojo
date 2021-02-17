/* eslint-disable no-plusplus */
function solution(str) {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (!arr.includes(str[i])) {
      arr.push(str[i]);
    }
  }

  return arr.join('');
}

describe('solution', () => {
  it('Remove duplicate characters', () => {
    expect(solution('ksekkset')).toBe('kset');
    expect(solution('testwwkeor')).toBe('teswkor');
  });
});
