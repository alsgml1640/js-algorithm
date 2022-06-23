// 삼각형 판별하기

function solution(a, b, c) {
  let answer = "YES";
  let max;

  // 가장 큰 수 찾기
  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (max < c) {
    max = c;
  }

  let total = a + b + c;

  if (total - max <= max) {
    answer = "NO";
  }
  return answer;
}

console.log(solution(13, 29, 17));
