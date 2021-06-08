function incrementString(str) {
  if (!str || Number.isNaN(Number(str[str.length - 1]))) {
    return `${str}1`;
  }

  const [n] = str.match(/[0-9]+/g);
  const s = str.match(/[a-z]+/ig);

  if (s) {
    return `${s}${`${Number(n) + 1}`.padStart(n.length, 0)}`;
  }

  return `${Number(n) + 1}`.padStart(n.length, 0);
}

// function incrementString (str) {
//   return str.replace(/[\d]*$/, i => String(+i + 1).padStart(i.length, 0));
// }

describe('incrementString', () => {
  it('Basic tests', () => {
    expect(incrementString('foobar000')).toBe('foobar001');
    expect(incrementString('foobar000999')).toBe('foobar001000');
    expect(incrementString('foobar001')).toBe('foobar002');
    expect(incrementString('foobar099')).toBe('foobar100');
    expect(incrementString('foobar99')).toBe('foobar100');
    expect(incrementString('1')).toBe('2');
    expect(incrementString('009')).toBe('010');
  });
});
