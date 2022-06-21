// 유효한 팰린드림
// 앞에서 읽을때나 뒤에서 읽을때나 같은 문자열
// 해당 문자열이 팰린드림이면 yes
// 아니면 no
// 회문을 검사할때 알파벳만 가지고 회문을 검사한다.
// 대소문자는 구분하지않는다.

function solution(str) {
  let answer = "YES";
  // 정규표현식
  let regExp = /[a-z]/gi;

  str = str.toLowerCase();

  //   console.log(str.match(regExg).join(""));
  //   console.log(str.match(regExg).reverse().join(""));

  if (str.match(regExp).join("") !== str.match(regExp).reverse().join("")) {
    return "NO";
  }
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
