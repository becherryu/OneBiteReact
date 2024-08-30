// 1. if 조건문 (if문)
let num = 4;

if (num >= 10) {
  //   console.log("num은 10 이상입니다.");
  //   console.log("조건이 참입니다!");
} else if (num >= 5) {
  //   console.log("num은 5 이상입니다.");
} else if (num >= 3) {
  //   console.log("num은 3 이상입니다.");
} else {
  //   console.log("조건이 거짓입니다!");
}

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "owl";

switch (animal) {
  case "cat": {
    console.log("고양이입니다.");
    break;
    v;
  }
  case "dog": {
    console.log("강아지입니다.");
    break;
  }
  case "bear": {
    console.log("곰입니다.");
    break;
  }
  case "snake": {
    console.log("뱀입니다.");
    break;
  }
  case "tiger": {
    console.log("호랑이입니다.");
    break;
  }
  default: {
    console.log("해당하는 동물이 없습니다.");
    break;
  }
}
