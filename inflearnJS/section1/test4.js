// 1부터 n까지의 합

function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(10));
