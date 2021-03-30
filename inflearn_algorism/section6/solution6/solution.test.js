function solution(numberPrinces, call) {
  const princes = Array.from({ length: numberPrinces }, (_, i) => i + 1);

  let count = 1;

  while (princes.length > 1) {
    if (count % call === 0) {
      princes.shift();
    } else {
      princes.push(princes.shift());
    }
    count += 1;
  }

  return princes[0];
}

describe('solution', () => {
  it('마지막까지 남게 된 번호(왕자)를 리턴한다.', () => {
    expect(solution(8, 3)).toBe(7);
  });
});
