// 10
// rxwsmligvm
// 20
// xwvlmrisgm

// fcrxzwscanmligyxyvym
// jxwtrhvujlmrpdoqbisbwhmgpmeoke
function makeAnagram(a, b) {
  // Write your code here
  const checkCharacter = new Set();
  let anagrams = '';

  for (let i = 0; i < a.length; i++) {
    const av = a[i];

    const regexp = new RegExp(`${av}`, 'g');

    const matchB = b.match(regexp);
    const matchA = a.match(regexp);

    if (matchB) {
      if (!checkCharacter.has(av)) {
        if (matchA.length <= matchB.length) {
          anagrams += matchA.join('');
        } else {
          anagrams += matchB.join('');
        }

        checkCharacter.add(av);
      }
    }
  }

  return (a.length - anagrams.length) + (b.length - anagrams.length);
}

describe('makeAnagram', () => {
  it('makeAnagram', () => {
    expect(makeAnagram(
      'fcrxzwscanmligyxyvym',
      'jxwtrhvujlmrpdoqbisbwhmgpmeoke',
    )).toBe(30);
  });
});
