// __proto__ ES6
// Object.getPrototypeOf() // ES5

// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Cat.prototype.voice = function () {
//   console.log(`Cat ${this.name} says meow`);
// };

// const cat = new Cat('KOT', 'white');
// console.log(Cat.prototype);
// console.log(cat.__proto__);
// console.log(Cat.prototype === cat.__proto__); // true
// console.log(cat);
// console.log(cat.constructor);
// cat.voice();

/////////////////
function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Vlad';

console.log('skin' in person); // true
console.log(person.legs); // 2
console.log(person.eyes); // undefined

console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('skin')); // false (because it's on the prototype)

// Object.create()
const proto = { year: 2019 };
const myYear = Object.create(proto);

console.log(myYear.year); // 2019
console.log(myYear.hasOwnProperty('year')); // false (because it's on the prototype)
console.log(myYear.__proto__ === proto); // true
