// 숫자의 개수
// 세개의 자연수가 주어질 때 A x B x C 를 계산한 결과에 0부터 9까지
// 각각의 숫자가 몇번씩 쓰였는지를 구하는 프로그램을 작성하시요

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
const input = [];
rl.on("line", (x) => {
  cnt++;
  input.push(x);
  if (cnt === 3) {
    const str = (input[0] * input[1] * input[2]).toString();
    console.log(solution(str));

    rl.close();
  }
});

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const solution = (str) => {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    arr[str[i]]++;
  }
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i] + "\n";
  }
  // console.log(answer);
  return answer;
};
