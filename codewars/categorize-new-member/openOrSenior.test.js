function openOrSenior(data) {
  return data.reduce((categories, [age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return [
        ...categories,
        'Senior',
      ];
    }

    return [
      ...categories,
      'Open',
    ];
  }, []);
}

describe('openOrSenior', () => {
  it('Basic tests', () => {
    expect(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
      .toEqual(['Open', 'Senior', 'Open', 'Senior']);
    expect(openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]))
      .toEqual(['Open', 'Open', 'Open', 'Open']);
    expect(openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]))
      .toEqual(['Senior', 'Open', 'Open', 'Open']);
  });
});
