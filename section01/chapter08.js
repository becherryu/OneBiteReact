// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // undefined가 아닌 값 var2의 값이 출력됨
//console.log(var4);
let var5 = var1 ?? var3; // undefined가 아닌 값 var3의 값이 출력됨
//console.log(var5);
let var6 = var2 ?? var3; // 먼저 적힌 값인 var2의 값이 출력됨
//console.log(var6);
let var7 = var3 ?? var2; // 먼저 적힌 값인 var3의 값이 출력됨
//console.log(var7);

let userName = "눈송이";
let userNickName = "NoonSong";

let displayName = userName ?? userNickName; // userName이 없으면 userNickName이 출력됨
//console.log(displayName);

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var8 = 1;
var8 = "hello";
var8 = 20;
var8 = true;

let t1 = typeof var8;
//console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용하여 참, 거짓일 때의 값을 다르게 반환
let var9 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var9 % 2 === 0 ? "짝수" : "홀수"; // 조건식 ? 참 : 거짓
//console.log(res);
