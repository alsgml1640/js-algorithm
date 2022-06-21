// 문자열 압축
// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 반복되는 경우
// 문자 바로 오른쪽에 반복 횟수를 표기하는 방법
// 단, 1번일 경우 생략
function solution(str) {
  let answer = "";
  let cnt = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      answer += str[i] + cnt;
      cnt = 1;
    }
  }
  answer = answer.match(/[^1]/g).join("");
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
