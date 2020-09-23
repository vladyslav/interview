// Data types
// console.log(typeof null); // Object
// console.log(typeof undefined); // undefined
// console.log(typeof 'asdas'); // String
// console.log(typeof 231); // Number
// console.log(typeof true); // Boolean
// console.log(typeof {}); // Object
// console.log(typeof Symbol('s')); // function

// // Typeof bugs
// console.log(typeof function () {}); // function
// console.log(typeof NaN); //number

// Type Coersion
// console.log(Boolean(0)); // false
// console.log(Boolean('')); // false
// console.log(Boolean(false)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(Symbol(''))); // false

// console.log(Boolean(' ')); // true
// console.log(Boolean({})); // true
// console.log(Boolean([])); // true
// console.log(Boolean(function () {})); // true
// console.log(Boolean(Symbol('1'))); // true

// Strings and numbers
// console.log('2' + 1); // 21
// console.log('2' - 1); // 1
// console.log(2 + 1 + '8'); // 38
// console.log('' - 1); // -1
// console.log('1px' - 1); // NaN
// console.log('1' * '2'); // 2
// console.log('1' / '2'); // 0.5
// console.log(null + 1); // 1
// console.log(null - 1); // -1
// console.log(undefined - 1); // NaN
// console.log(undefined + 1); // NaN
// console.log(NaN + 1); // NaN
// console.log(NaN - 1); // NaN
// console.log([] + 1); // 1
// console.log([] - 1); // -1
// console.log({} + 1); // [object Object]1
// console.log({} - 1); // NaN

// == vs ====
console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log('0' == false); // true (type coersion: 0 == 0)
console.log('0' == 0); // true (type coersion: 0 == 0)
console.log(false == []); // true
console.log(false == {}); // false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // true
console.log({} == {}); // false
console.log([] == []); // false
