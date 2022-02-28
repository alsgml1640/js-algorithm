// 홀수
// 배열들중에 홀수인 수만 모두 골라 합읊 구하고
// 그중 최솟값을 구하라

function solution(arr) {
  let answer = [];
  let sum = 0;
  let min = 1000;

  arr.forEach((e) => {
    if (e % 2 !== 0) {
      sum += e;
      if (e < min) {
        min = e;
      }
    }
  });
  answer.push(sum);
  answer.push(min);
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
