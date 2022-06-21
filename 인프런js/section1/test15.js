// 가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자룰 출력
// 단 길이가 짝수면 가운데 2개 문자 출력 '

function solution(s) {
  let answer;
  let mid = 0;

  if (s.length % 2 === 0) {
    mid = s.length / 2;
    answer = s[mid - 1] + s[mid];
    //console.log(mid - 1, mid);
  } else {
    mid = Math.floor(s.length / 2);
    answer = s[mid];
  }

  return answer;
}
console.log(solution("good"));
