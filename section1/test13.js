// 대소문자 변환
// 대문자 -> 소문자
// 소문자 -> 대문자로 변환하여 출력

function solution(s) {
  let answer = "";

  for (x of s) {
    if (x === x.toUpperCase()) {
      answer += x.toLowerCase();
    } else {
      answer += x.toUpperCase();
    }
  }
  return answer;
}

let str = "StuDY";
console.log(solution(str));
