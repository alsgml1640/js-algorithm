// 2. 보이는 학생
// 선생님이 학생을 일렬로 세웠습니다
// 일렬로 서있는 학생의 키가 앞에서 부터 순서대로 주어질떄
// 맨앞에 서있는 선생님이 볼수있는 학생의 수를 구하는 프로그램을
// 작성하세요
// 앞사람보다 작거나 같으면 안보임

function solution(s) {
  let answer = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] < s[i]) {
      answer++;
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
