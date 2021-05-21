function solution(tickets) {
  const answer = [];

  let check = Array.from({ length: tickets.length }, () => false);

  function dfs(level, ticket, path) {
    if (level === tickets.length) {
      answer.push(path);
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      const destination = tickets[i][1];

      if (!check[i] && ticket === tickets[i][0]) {
        check[i] = true;
        dfs(level + 1, destination, [...path, destination]);
        check[i] = false;
      }
    }
  }

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === 'ICN') {
      check[i] = true;
      dfs(1, tickets[i][1], [...tickets[i]]);
      check = Array.from({ length: tickets.length }, () => false);
    }
  }

  answer.sort();

  return answer[0];
}

describe('단어 변환', () => {
  it('solution', () => {
    expect(solution([['ICN', 'JFK'], ['HND', 'IAD'], ['JFK', 'HND']]))
      .toEqual(['ICN', 'JFK', 'HND', 'IAD']);
    expect(solution([['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], ['ATL', 'SFO']]))
      .toEqual(['ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO']);
  });
});
