// 봉우리
// 격자판의 상하좌우 숫자보다 큰 숫자는 봉우리 지역이다.

function solution(arr) {
  let answer = 0;
  let n = arr.length;

  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1; // true
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          ny >= 0 &&
          n > nx &&
          n > ny &&
          arr[i][j] <= arr[nx][ny]
        ) {
          flag = 0;
        }
      }
      if (flag) {
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
