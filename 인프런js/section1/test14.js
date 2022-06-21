// 가장 긴 문자열
// n개의 문자열이 입력되면 그중 가장 긴 문자열을 출력하는 프로그램 작성

function solution(s) {
  let answer = "";
  let maxLength = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < s.length; i++) {
    if (maxLength < s[i].length) {
      maxLength = s[i].length;
      answer = s[i];
    }
  }

  //answer = maxLength;
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
