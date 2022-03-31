// OX 퀴즈
// 'ooxxoxxooo'와 같은 ox퀴즈의 결과가 있다.
// 문제를 맞은 경우 그 문제의 점수는 그문제까지 연속된 o의 개수가 된다.
// 첫째줄에 테스트 케이스의 개수가 주어진다.
// 문자열은 ox 만으로 이루어져 있다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let testCase = 0;
const input = [];
rl.on("line", function (line) {
  if (testCase === 0) {
    testCase = line;
  } else {
    input.push(line.toUpperCase());
    if (input.length === Number(testCase)) {
      console.log(solution(input));
      rl.close();
    }
  }
});

let answer = "";
let cnt = 0;
let num = 0;
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    cnt = 0;
    num = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "O") {
        cnt++;
      } else {
        cnt = 0;
      }
      num += cnt;
    }
    answer += num + "\n";
  }

  return answer;
}
