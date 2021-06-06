/* eslint-disable camelcase */
function digital_root(n) {
  function recursive(v) {
    const sv = v.toString().split('');

    if (v < 10) {
      return v;
    }

    let sum = 0;

    sv.forEach((value) => {
      sum += Number(value);
    });

    return recursive(sum);
  }

  return recursive(n);
}

describe('digital_root', () => {
  it('Basic tests', () => {
    expect(digital_root(16)).toBe(7);
    expect(digital_root(456)).toBe(6);
  });
});
