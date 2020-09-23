console.log(sum(1, 41)); // 42
console.log(sumArrow(1, 41)); // ReferenceError: Cannot access 'sumArrow' before initialization

function sum(a, b) {
  return a + b;
}
const sumArrow = (a, b) => a + b;

// console.log(i); // undefined (var hoists variable to the top, but value isn`t assigned)
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// console.log(b); // ReferenceError: Cannot access 'c' before initialization
// var i = 42;
// let b = 42;
// const c = 42;
