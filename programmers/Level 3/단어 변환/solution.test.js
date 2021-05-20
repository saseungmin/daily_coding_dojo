/* eslint-disable no-param-reassign */
// 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
// 2. words에 있는 단어로만 변환할 수 있습니다.
const hasWord = (words, target) => words.some((word) => word === target);

function solution(begin, target, words) {
  const queue = [[begin, 0]];

  if (!hasWord(words, target)) {
    return 0;
  }

  while (queue.length) {
    const [now, count] = queue.shift();

    if (target === now) {
      return count;
    }

    const temp = [];

    words.forEach((word, index) => {
      let cnt = 0;

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== now[i]) {
          cnt += 1;
        }
      }

      if (cnt === 1) {
        queue.push([word, count + 1]);
        temp.push(index);
      }
    });

    words = words.filter((_, index) => !temp.includes(index));
  }

  return 0;
}

describe('단어 변환', () => {
  it('hasWord', () => {
    expect(hasWord(['hot', 'dot', 'dog', 'lot', 'log', 'cog'], 'cog'))
      .toBeTruthy();

    expect(hasWord(['hot', 'dot', 'dog', 'lot', 'log', 'cog'], 'test'))
      .toBeFalsy();
  });

  it('solution', () => {
    expect(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
      .toBe(4);

    expect(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']))
      .toBe(0);
  });
});
