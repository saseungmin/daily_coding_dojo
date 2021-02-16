function solution(arr) {
  return arr.reduce((pre, cur) => {
    if (cur.length - pre.length > 0) {
      return cur;
    }
    return pre;
  });
}

describe('solution', () => {
  it('should return longest string', () => {
    expect(solution(['teacher', 'time', 'student', 'beautiful', 'good'])).toBe('beautiful');
  });
});
