// 숫자만 추출
// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만든다.

function solution(str) {
  let answer = "";
  let regExp = /[0-9]/g;
  //console.log(str.match(regExp).join(""));
  answer = parseInt(str.match(regExp).join(""));
  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
