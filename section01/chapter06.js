// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
//console.log(result); // num 값이 묵시적으로 string타입으로 변환됨 (1020 출력)

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용하여 직접 형 변환을 명시함
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
//console.log(strToNum1 + 10);

let str2 = "10개";
let strToNum2 = parseInt(str2);
//console.log(strToNum2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
//console.log(numToStr1 + "입니다.");
