// function jumpingOnClouds(c) {
//   let result = Number.MAX_SAFE_INTEGER;
//   // Write your code here
//   function dfs(level, count) {
//     if (level === c.length) {
//       result = Math.min(count, result);
//       return;
//     }

//     if (level > c.length) {
//       return;
//     }

//     if (c[level] === '1') {
//       return;
//     }

//     dfs(level + 2, count + 1);
//     dfs(level + 1, count + 1);
//   }

//   dfs(0, 0);

//   return result;
// }

function jumpingOnClouds(c) {
  let count = 0;

  let i = 0;

  while (i < c.length - 2) {
    if (c[i + 2] === 1) {
      i += 1;
    } else {
      i += 2;
    }

    count += 1;
  }

  if (i < c.length - 1) {
    count += 1;
  }

  return count;
}

describe('jumpingOnClouds', () => {
  it('jumpingOnClouds', () => {
    expect(jumpingOnClouds([0, 0, 0, 1, 0, 0])).toBe(3);
    expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])).toBe(4);
  });
});
