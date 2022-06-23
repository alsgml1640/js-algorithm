// 가장 짧은 문자거리
// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진
// 최소거리를 출력하는 프로그램 작성

function solution(str, t) {
  let answer = [];
  let N = str.length;
  str = str.split("");

  let range = 100;

  for (let x of str) {
    if (x === t) {
      range = 0;
    } else {
      range++;
    }
    answer.push(range);
  }
  range = 100;

  console.log(answer);
  let reverse = [];
  let reverseStr = [];
  for (let i = N - 1; i >= 0; i--) {
    //range = 0;
    reverse.push(answer[i]);
    reverseStr.push(str[i]);
    if (str[i] === t) {
      range = 0;
      answer[i] = 0;
    } else {
      range++;
      answer[i] = Math.min(range, answer[i]);
    }
  }

  //   console.log(reverse);
  //   console.log(reverseStr);
  //   for (let i = N - 1; i >= 0; i--) {
  //     if (str[i] === t) {
  //       range = 0;
  //     } else {
  //       range++;
  //       let newNum = range;
  //       answer[i] = Math.min(range, newNum);
  //     }
  //   }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
