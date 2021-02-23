const join = (arr) => arr.join('');
const filter = (str) => str.toUpperCase().match(/[a-zA-Z]/ig);

function solution(str) {
  const filteredStr = filter(str);
  const filtered = join(filteredStr);
  const filteredReverse = join(filteredStr.reverse());

  if (filtered === filteredReverse) {
    return 'YES';
  }

  return 'NO';
}

describe('solution', () => {
  it('Is palindrome string', () => {
    expect(solution('found7, time: study; Yduts; emit, 7Dnuof')).toBe('YES');
  });

  it("Isn't palindrome string", () => {
    expect(solution('sky ;;1245sky')).toBe('NO');
  });
});
