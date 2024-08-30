// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
//console.log(varA); // 함수 자체를 출력
varA(); // 함수 출력

let varB = function () {
  // 익명함수
  //console.log("funcB");
};
varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
};
//console.log(varC());

// 동일 역할
let varD = () => 1;
//console.log(varD());

let varE = (value) => value + 1;
//console.log(varE(10));

let varF = (value) => {
  //console.log(value);
  return value + 1;
};
//console.log(varF(10));
