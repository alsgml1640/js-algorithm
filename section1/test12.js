// 대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력받으면
// 해당 문자열을 모두 대문자로 출력한다.

function solution(s) {
  let answer = "";

  for (x of s) {
    answer += x.toUpperCase();
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
