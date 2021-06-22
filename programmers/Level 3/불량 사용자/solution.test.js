/* eslint-disable camelcase */
const isMatchId = (bannedId) => (userId) => {
  const convertAsterisk = bannedId.replace(/\*/g, '.');
  const regex = new RegExp(`^(${convertAsterisk})$`);

  return regex.test(userId);
};

function solution(user_id, banned_id) {
  const result = new Set();
  const check = Array.from({ length: user_id.length }, () => false);
  const temp = Array.from({ length: banned_id.length }, () => 0);

  function dfs(level) {
    if (level === banned_id.length) {
      result.add(temp.slice().sort().join(''));
      return;
    }

    const match = isMatchId(banned_id[level]);

    for (let i = 0; i < user_id.length; i++) {
      if (!check[i] && match(user_id[i])) {
        temp[level] = user_id[i];
        check[i] = true;

        dfs(level + 1);

        check[i] = false;
      }
    }
  }

  dfs(0);

  return result.size;
}

describe('불량 사용자', () => {
  it('isMatchId', () => {
    expect(isMatchId('fr*d*')('frodo')).toBeTruthy();
    expect(isMatchId('fr*d*')('crodo')).toBeFalsy();
  });

  it('solution', () => {
    expect(solution(
      ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
      ['fr*d*', 'abc1**'],
    )).toBe(2);
    expect(solution(
      ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
      ['*rodo', '*rodo', '******'],
    )).toBe(2);
    expect(solution(
      ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'],
      ['fr*d*', '*rodo', '******', '******'],
    )).toBe(3);
  });
});
