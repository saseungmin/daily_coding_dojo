// operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
// operations의 원소는 큐가 수행할 연산을 나타냅니다.
// 원소는 “명령어 데이터” 형식으로 주어집니다.
// - 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
// 빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.

const splitCommand = (command) => command.split(' ');

function solution(operations) {
  const answer = [];

  operations.forEach((operation) => {
    const [command, sub] = splitCommand(operation);

    if (command === 'I') {
      answer.push(Number(sub));
    } else if (command === 'D') {
      const numberSub = Number(sub);
      answer.sort((a, b) => b - a);

      if (answer.length) {
        if (numberSub === -1) {
          answer.pop();
        } else if (numberSub === 1) {
          answer.shift();
        }
      }
    }
  });

  return answer.length ? [Math.max(...answer), Math.min(...answer)] : [0, 0];
}

describe('이중우선순위큐', () => {
  it('splitCommand', () => {
    expect(splitCommand('I 16')).toEqual(['I', '16']);
  });

  it('solution', () => {
    expect(solution(['I 16', 'D 1'])).toEqual([0, 0]);
    expect(solution(['I 7', 'I 5', 'I -5', 'D -1'])).toEqual([7, 5]);
  });
});
