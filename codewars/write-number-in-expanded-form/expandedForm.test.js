function expandedForm(num) {
  const answer = [];
  const strN = num.toString();

  for (let i = 0; i < strN.length; i++) {
    const squared = strN.length - i;

    if (Number(strN[i]) !== 0) {
      answer.push(strN[i] * (10 ** (squared - 1)));
    }
  }

  return answer.join(' + ');
}

describe('expandedForm', () => {
  it('Basic tests', () => {
    expect(expandedForm(12)).toBe('10 + 2');
    expect(expandedForm(42)).toBe('40 + 2');
    expect(expandedForm(70304)).toBe('70000 + 300 + 4');
  });
});
