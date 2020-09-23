// const person = {
//   surname: 'Snow',
//   knows: function (what, name) {
//     console.log(`You know ${what}, ${name} ${this.surname}`);
//   }
// };

// const bran = { surname: 'Stark' };

// person.knows('nothing', 'John'); // You know nothing John Snow
// person.knows.call(bran, 'everything', 'Bran');
// person.knows.call(bran, ...['everything', 'Bran']);
// person.knows.apply(bran, ['everything', 'Bran']);
// person.knows.bind(bran, 'everything', 'Bran')();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }

// const elena = new Person('Elena', 20);

// Явный контекст
// function logThis() {
//   console.log(this);
// }

// const obj = { num: 42 };
// logThis.apply(obj);
// logThis.bind(obj)();
// logThis.call(obj);

// Неявный контекст
// const animal = {
//   legs: 4,
//   logThis: function () {
//     console.log(this);
//   }
// };

// animal.logThis();

function Cat(color) {
  this.color = color;
  console.log(this);
  (() => console.log('Arrow this', this))();
}

new Cat('red');
