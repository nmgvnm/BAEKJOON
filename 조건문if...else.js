var x = 2;
var result;

if (x % 2) { // 2 % 2 = 0, 이때 0은 암묵적으로 false를 반환한다.
  result = '홀수'; // 이때 1은 true를 반환한다.
} else {
  result = '짝수';
}

console.log(result);