// 세 수 의 최솟값
function solution(a, b, c) {
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) {
    answer = c;
  }

  return answer;
}

console.log(solution(10, 22, 23));
