// 중복단어 제거
// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램 작성

function solution(s) {
  let answer = [];

  answer = s.filter((e, i) => i === s.indexOf(e));
  // s.forEach((e, i) => {
  //   if (i === s.indexOf(e)) {
  //     answer.push(e);
  //   }
  // });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
