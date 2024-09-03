// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// -> 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
// console.log(doubledArr);

// 2. includes
// -> 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
// console.log(isInclude);

// 3. indexOf
// -> 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// -> 같은 값이 있으면 가장 처음의 인덱스 출력, 값이 없으면 -1
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// console.log(index);

// 4. findIndex
// -> 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  //if (item === 2) return true;
  if (item % 2 !== 0) return true;
});
// const findedIndex = arr4.findIndex((item) => item % 2 !== 999) // 해당하지 않으면 -1 반환
// console.log(findedIndex);

// 객체에서의 사용
let objectArr = [{ name: "눈송이" }, { name: "홍길동" }];
// console.log(objectArr.indexOf({ name: "눈송이" })); // indexOf는 기본적으로 얕은비교를 하기 때문에 -1 출력
// console.log(objectArr.findIndex((item) => item.name === "눈송이")); // 객체 비교하려면 findIndex 사용하기

// 5. find
// -> 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 그 요소를 그대로 반환
let arr5 = [{ name: "눈송이" }, { name: "홍길동" }];
const finded = arr5.find((item) => item.name === "눈송이");
console.log(finded);
