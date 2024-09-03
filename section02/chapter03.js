// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "눈송이",
  age: 20,
  hobby: "스노보드",
};
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

let { name, age, hobby, extra = "hello" } = person;
// console.log(name, age, hobby, extra);

// 3. 객체의 구조 분해 할당을 이용해 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
