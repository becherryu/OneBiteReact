// 1. 단락평가
// -> 특정 조건에 맞춰서 함수를 아예 호출하지 않을 수도 있음

function returnFalse() {
  console.log("False 함수");
  return false;
  // return undefined // falsy한 값에도 동일하게 적용됨
}

function returnTrue() {
  console.log("True 함수");
  return true;
  // return 10 // truthy한 값에도 동일하게 적용됨
}

// console.log(returnFalse() && returnTrue()); // 단락평가 작동(returnFalse()까지만 작동)
// console.log(returnTrue() && returnFalse()); // 단락평가 작동 안함

console.log(returnTrue() || returnFalse()); // 단락평가 작동

// 단락 평가 활용 사례
function printName(person) {
  //   if (!person) {
  //     console.log("person에 값이 없음");
  //     return;
  //   }
  //console.log(person && person.name);
  const name = person && person.name;
  console.log(name || "person에 값이 없음");
}

printName();
printName({ name: "눈송이" });
