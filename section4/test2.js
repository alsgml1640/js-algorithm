// 뒤집은 소수
// n개의 자연수가 입력되면 각 자연수를 뒤집은 후
// 그 뒤집은 수가 소수()이면 그 소수를 출력하는 프로그램 작성
// 만약 910을 뒤집으며 19로 숫자화해야한다.
// 첫자리의 0은 무시한다.

function solution(arr) {
  let answer = [];
  let N = arr.length;

  let n_string = "";
  for (let i = 0; i < N; i++) {
    n_string = arr[i].toString();

    let reverseNum = "";
    for (let i = n_string.length - 1; i >= 0; i--) {
      reverseNum += n_string[i];
    }
    reverseNum = parseInt(reverseNum);
    if (isPrimeNumber(reverseNum)) {
      if (reverseNum !== 1) {
        answer.push(reverseNum);
      }
    }
  }

  return answer;
}

function isPrimeNumber(num) {
  if (num === 2) return true;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
