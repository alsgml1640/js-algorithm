// 16. 중복 문자 제거
function solution(s) {
  let answer = "";

  for (let x in s) {
    console.log(Number(x), s[x], s.indexOf(s[x]));
    //console.log(typeof Number(x), s[x], typeof s.indexOf(s[x]));
    if (Number(x) === s.indexOf(s[x])) {
      answer += s[x];
    }
  }
  return answer;
}
console.log(solution("ksekkset"));
