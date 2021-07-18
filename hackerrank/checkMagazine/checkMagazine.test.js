/* eslint-disable no-restricted-syntax */
function checkMagazine(magazine, note) {
  // Write your code here
  let result = 'Yes';

  const map = new Map();

  magazine.forEach((v) => {
    if (map.has(v)) {
      map.set(v, map.get(v) + 1);
    } else {
      map.set(v, 1);
    }
  });

  note.forEach((v) => {
    if (map.has(v)) {
      if (map.get(v) === 0) {
        result = 'No';
      } else {
        map.set(v, map.get(v) - 1);
      }
    } else {
      result = 'No';
    }
  });

  return result;
}

describe('checkMagazine', () => {
  it('checkMagazine', () => {
    expect(checkMagazine(
      ['give', 'me', 'one', 'grand', 'today', 'night'],
      ['give', 'one', 'grand', 'today'],
    )).toBe('Yes');

    expect(checkMagazine(
      ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'],
      ['ive', 'got', 'some', 'coconuts'],
    )).toBe('No');

    expect(checkMagazine(
      ['two', 'times', 'three', 'is', 'not', 'four'],
      ['two', 'times', 'two', 'is', 'four'],
    )).toBe('No');
  });
});
