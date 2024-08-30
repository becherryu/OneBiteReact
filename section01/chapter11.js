// 함수선언
// function greeting() {
//   console.log("안녕하세요!");
// }

// console.log("호출 전");
// greeting();
// console.log("호출 후");

// 함수
function getArea(width, height) {
  function another() {
    // 중첩함수
    console.log("another");
  }
  another();

  let area = width * height;

  //console.log(area);
  return area;
}

let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);
getArea(120, 200);

// 호이스팅 : (끌어올리다) -> 이 덕분에 함수를 맨 아래 선언해도 위에서 작동 가능
