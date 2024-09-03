// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr22 = [4, 5, 6];

// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6]
let arr2 = [4, ...arr1, 5, 6]; // ... <- 이게 스프레드 연산자
//console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
//console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// -> rest 매개변수를 사용할 때에는 이 매개변수가 가장 마지막에 와야 함 (이름은 상관 없음)
function funcB(one, ...rest) {
  console.log(one, rest);
}
funcB(...arr1);
