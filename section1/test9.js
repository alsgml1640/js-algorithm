// A를 #으로 변경하기
// 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램

function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    // 해당 인덱스가 'A'일 경우
    if (s[i] === "A") {
      // 해당 자리에 #을 더해주고
      answer += "#";
    } else {
      // 아니면 동일한 값을 넣어준다.
      answer += s[i];
    }
  }
  return answer;
}
let str = "BANANAAAAA";
console.log(solution(str));
