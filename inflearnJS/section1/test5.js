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

  // 2번째 방법
  // let answer = Math.min(...arr);
  // let answer = Math.min.apply(null, arr);
  return answer;
}

let arr = [5, 7, 10, 13, 23, 9, 11];
console.log(solution(arr));
