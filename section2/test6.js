// 격자판 최대합
// 5*5 격자판에 아래와 같이 숫자가 적혀있다
// 각 행의 합, 각 열의 합, 두 대각선의 합중 가장 큰 합을 출력한다.

function solution(arr) {
  let answer = 0;
  let N = arr.length;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < N; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < N; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = 0;
  sum2 = 0;

  for (let i = 0; i < N; i++) {
    sum1 += arr[i][i];
    sum2 += arr[5 - i - 1][i];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

const array = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(array));
