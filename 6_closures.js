// function sayHelloTo(name) {
//   const message = 'Hello ' + name;
//   return function () {
//     console.log(message);
//   };
// }
// sayHelloTo('Vlad')();

// function createFrameworkManager() {
//   const fw = ['Angular', 'Vue'];

//   return {
//     print: function () {
//       console.log(fw);
//     },
//     add: function (framework) {
//       fw.push(framework);
//     }
//   };
// }

// const manager = createFrameworkManager();
// console.log(manager);
// manager.print();
// manager.add('React');
// manager.print();

// setTimeout
const fib = [1, 1, 2, 3, 5, 8, 13];

// for (var i = 0; i < fib.length; i++) {
//   setTimeout(() => console.log(`fib[${i}] = ${fib[i]}`), 1500);
// }
// fib[7] = undefined
// fib[7] = undefined
// fib[7] = undefined
// fib[7] = undefined
// fib[7] = undefined
// fib[7] = undefined
// fib[7] = undefined

for (let i = 0; i < fib.length; i++) {
  setTimeout(() => console.log(`fib[${i}] = ${fib[i]}`), 1500);
}
// fib[7] = 1
// fib[7] = 1
// fib[7] = 2
// fib[7] = 3
// fib[7] = 5
// fib[7] = 8
// fib[7] = 13

for (let i = 0; i < fib.length; i++) {
  (j => setTimeout(() => console.log(`fib[${j}] = ${fib[j]}`), 1500))(i);
}
// fib[7] = 1
// fib[7] = 1
// fib[7] = 2
// fib[7] = 3
// fib[7] = 5
// fib[7] = 8
// fib[7] = 13
