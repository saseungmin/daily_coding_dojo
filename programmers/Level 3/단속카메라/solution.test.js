function solution(routes) {
  let answer = 0;
  let endPoint = -30001;

  routes.sort((a, b) => a[1] - b[1]);

  routes.forEach(([input, output]) => {
    if (endPoint < input) {
      endPoint = output;
      answer += 1;
    }
  });

  return answer;
}

describe('단속카메라', () => {
  it('solution', () => {
    expect(solution([[-20, 15], [-14, -5], [-18, -13], [-5, -3]])).toBe(2);
  });
});
