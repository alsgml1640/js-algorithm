// 최소 , 최대
// n개의 정수가 주어진다.
// 최소값과 최대값을 구하는 프로그램을 작성하시오

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let cnt = 1;
rl.on("line", function (line) {
  input.push(line);
  if (input.length === 1) {
    N = input[0];
    cnt++;
  } else if (cnt === 2) {
    line = line.split(" ");

    console.log(solution(line));
    rl.close();
  }
});

function solution(arr) {
  let answer = "";
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  answer = `${min} ${max}`;
  return answer;
}
