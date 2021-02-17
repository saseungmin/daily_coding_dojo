function solution(words) {
  // for (let i = 0; i < words.length; i++) {
  //   if (!arr.includes(words[i])) {
  //     arr.push(words[i]);
  //   }
  // }

  // words.forEach((word) => {
  //   if (!arr.includes(word)) {
  //     arr.push(word);
  //   }
  // });

  return words.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
      return [...pre, cur];
    }

    return pre;
  }, []);

  // return arr;
}

describe('solution', () => {
  it('Remove duplicate words', () => {
    expect(solution(['good', 'time', 'good', 'time', 'student'])).toEqual(['good', 'time', 'student']);
  });
});
