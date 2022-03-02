// 일곱난쟁이
//
function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, c) => a + c);

  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      //   console.log(i, j);
      //   console.log(answer[i], answer[j]);
      //   console.log("----");
      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }

  console.log(answer.reduce((a, c) => a + c));
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// 이중 for문 주의!!
// splice는 기존의 배열을 변형시킨다.
