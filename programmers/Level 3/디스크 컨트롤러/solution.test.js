/* eslint-disable prefer-destructuring */
function solution(jobs) {
  const total = jobs.length;
  let answer = 0;
  let tick = 0;
  const queue = [];
  while (true) {
    // 1. (jobs가 있을 때) tick보다 같거나 작은 작업 모두 추출 후 queue에 삽입
    let index = 0;
    while (true) {
      if (index >= jobs.length) break;
      if (jobs[index][0] <= tick) {
        // 요청이 들어온 작업
        queue.push(jobs.splice(index, 1)[0]);
      } else {
        // 요청 전 작업
        index += 1;
      }
    }

    // 3. queue와 jobs가 0이면 끝
    if (queue.length === 0) {
      if (jobs.length === 0) {
        break;
      } else {
        tick += 1;
      }
    } else {
      // 2. (queue가 있을 때) queue에서 작업량이 가장 작은 작업 수행
      let minIndex = 0;
      for (let i = 1; i < queue.length; i++) {
        if (queue[minIndex][1] > queue[i][1]) minIndex = i;
      }

      // 2.1 수행한 시간 만큼 tick 증가
      tick += queue[minIndex][1];

      // 2.2 answer += tick - 수행한 작업의 작업 처리 요청 시간
      answer += tick - queue[minIndex][0];

      // 2.3 queue에서 해당 job 삭제
      queue.splice(minIndex, 1);
    }
  }

  return Math.floor(answer / total);
}

// const solution = (jobs) => {
//   let answer = 0;
//   let j = 0;
//   let time = 0;
//   jobs.sort((a, b) => a[0] - b[0]);

//   const priorityQueue = [];

//   while (j < jobs.length || priorityQueue.length) {
//     if (jobs.length > j && time >= jobs[j][0]) {
//       priorityQueue.push(jobs[j]);
//       priorityQueue.sort((a, b) => a[1] - b[1]);

//       j += 1;
//     } else if (priorityQueue.length) {
//       time += priorityQueue[0][1];
//       answer += time - priorityQueue[0][0];
//       priorityQueue.shift();
//     } else {
//       time = jobs[j][0];
//     }
//   }
//   return Math.floor(answer / jobs.length);
// };

describe('디스크 컨트롤러', () => {
  it('solution', () => {
    expect(solution([[0, 3], [1, 9], [2, 6]])).toBe(9);
  });
});
