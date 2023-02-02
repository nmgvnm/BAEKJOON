// 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);

if (a > b) {
  console.log(">");
} else if (a < b){
  console.log("<");
} else {
  console.log("==");
}