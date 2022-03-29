// 나머지
// 두 자연수 a,b가 있을때 A%B는 a를 b로 나눈 나머지이다.
// 예를 들어 7,14 ,27,38을 3으로 나눈 나머지는
// 1,2,0,2 ㅇ;디
// 수 10개를 입력받은 뒤 , 42로 나눈 나머지를 구한다.
// 그 다음 서로 다른 값이 몇개 있는지 출력하는 프로그램을 작성

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
const input = [];
rl.on("line", function (x) {
  cnt++;
  input.push(x % 42);
  if (cnt === 10) {
    console.log(solution(input));
    rl.close();
  }
});

function solution(arr) {
  let answer = 0;
  answer = new Set(arr).size;
  return answer;
}
