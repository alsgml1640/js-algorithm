// 회문 문자열
// 앞뒤가 똑같은 문자열
// 대소문자 구분하지않음

function solution(str) {
  let answer = "YES";
  let n = str.length;
  str = str.toLowerCase();

  let result = "";
  for (let i = n - 1; i >= 0; i--) {
    result += str[i];
  }

  if (result !== str) {
    return "NO";
  }

  return answer;
}

let str = "gooG";
console.log(solution(str));
