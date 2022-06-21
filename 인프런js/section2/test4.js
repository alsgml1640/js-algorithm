// 점수 계산
// 연속적으로 답을 맞히는 경우에는 가산점을 준다.

function solution(arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      sum++;
      answer += sum;
    } else {
      sum = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
