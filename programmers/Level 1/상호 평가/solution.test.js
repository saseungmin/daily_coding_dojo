const getGrades = (averageScore) => {
  if (averageScore >= 90) {
    return 'A';
  } if (averageScore >= 80 && averageScore < 90) {
    return 'B';
  } if (averageScore >= 70 && averageScore < 80) {
    return 'C';
  } if (averageScore >= 50 && averageScore < 70) {
    return 'D';
  }

  return 'F';
};

const convertToGrades = (averageScores) => averageScores.map(getGrades).join('');

const getAverageScore = (eachScore) => eachScore
  .reduce((average, score) => average + score, 0) / eachScore.length;

const changeMatrixArray = (scores) => {
  const newScores = Array.from({ length: scores.length }, () => Array(scores[0].length));

  for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores.length; j++) {
      newScores[i][j] = scores[j][i];
    }
  }

  return newScores;
};

const averageStandardEachScore = (scores) => {
  const filterScore = [];

  for (let i = 0; i < scores.length; i++) {
    const eachScore = scores[i];
    const targetScore = scores[i][i];
    const averageEachScore = getAverageScore(eachScore);

    const max = Math.max(...eachScore);
    const min = Math.min(...eachScore);

    const differentToTargetScore = eachScore.filter((score) => score !== targetScore);

    if (differentToTargetScore.length !== eachScore.length - 1) {
      filterScore.push(averageEachScore);
    } else if (max === targetScore || min === targetScore) {
      filterScore.push(getAverageScore([...differentToTargetScore]));
    } else {
      filterScore.push(averageEachScore);
    }
  }

  return filterScore;
};

function solution(scores) {
  return convertToGrades(averageStandardEachScore(changeMatrixArray(scores)));
}

describe('상호 평가', () => {
  const scores = [
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ];

  const newMatrix = [
    [100, 50, 47, 61, 24],
    [90, 45, 88, 57, 90],
    [98, 99, 95, 100, 94],
    [88, 85, 80, 80, 75],
    [65, 77, 67, 65, 65],
  ];

  it('should be return grades', () => {
    expect(solution(scores)).toBe('FBABD');
  });

  it('should be return change matrix', () => {
    expect(changeMatrixArray(scores))
      .toEqual([
        [100, 50, 47, 61, 24],
        [90, 45, 88, 57, 90],
        [98, 99, 95, 100, 94],
        [88, 85, 80, 80, 75],
        [65, 77, 67, 65, 65],
      ]);
  });

  it('should be return average each score', () => {
    expect(averageStandardEachScore(newMatrix))
      .toEqual([45.5, 81.25, 97.2, 81.6, 67.8]);
  });

  it('should be return average score', () => {
    expect(getAverageScore([98, 99, 95, 100, 94])).toBe(97.2);
  });

  it('should be return convert average score to grades', () => {
    expect(convertToGrades([45.5, 81.25, 97.2, 81.6, 67.8])).toBe('FBABD');
  });
});
