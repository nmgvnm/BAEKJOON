// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 예제 입력 1 [ 1 2 ]
// 예제 출력 1 [ 3 ]

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
console.log(a+b);