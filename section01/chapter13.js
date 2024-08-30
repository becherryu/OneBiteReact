// 1. 콜백함수

function main(value) {
  console.log(value);
  value();
  console.log("end");
}

function sub() {
  // 콜백함수
  console.log("I am sub");
}
//main(sub);

// main(function () {
//   console.log("익명함수");
// });

// main(() => {
//   console.log("화살표함수");
// });

// 2. 콜백 함수의 활용
// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }

// // function repeatDouble(count) {
// //   for (let idx = 1; idx <= count; idx++) {
// //     console.log(idx * 2);
// //   }
// // }

// repeat(5);

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}
repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  //repeatDouble
  console.log(idx * 2);
});

repeat(5, (idx) => {
  //repeatTriple
  console.log(idx * 3);
});
