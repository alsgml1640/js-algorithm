// 자릿수의 합
// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고
// 그 합이 최대인 자연수를 출력하는 프로그램 작성
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 해야함
function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  let sum = 0;
  for (let x of arr) {
    sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0);
    if (max < sum) {
      max = sum;
      answer = x;
    } else if (max === sum) {
      if (x > answer) {
        answer = x;
      }
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
