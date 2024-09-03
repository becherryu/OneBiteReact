// 6가지의 요소 조작 메서드

// 1. push
// -> 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
// console.log(arr1);
// console.log(newLength); // 배열의 길이 반환

// 2. pop
// -> 배열의 맨 뒤에 있는 요소 제거, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
// console.log(poppedItem);
// console.log(arr2);

// 3. shift
// -> 배열의 맨 앞에 있는 요소 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
//console.log(shiftedItem, arr3);

// 4. unshift
// -> 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(arr4);
// console.log(newLength2); // 배열의 길이

// 5. slice
// -> 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 전환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 2번 인덱스부터 4번인덱스까지 잘라냄 (시작, 끝+1)
let sliced2 = arr5.slice(2); // 2번 인덱스부터 끝까지
let sliced3 = arr5.slice(-3); // 뒤에서부터 슬라이스
// console.log(sliced);
// console.log(sliced2);
// console.log(sliced3);
// console.log(arr5);

// 6. concat
// -> 두 개의 서로 다른 배열을 이어 붙여 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatArr = arr6.concat(arr7);
// console.log(concatArr);
