// 최솟값 구하기

function solution(arr) {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;

  arr.forEach((e) => {
    if (e < min) {
      min = e;
    }
    answer = min;
  });
  return answer;
}

let arr = [5, 7, 10, 13, 23, 9, 11];
console.log(solution(arr));
