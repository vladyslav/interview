// Immediately invoked function expression
let result = [];
for (let i = 0; i < 5; i++) {
  result.push(() => console.log(i));
}

result[2](); // 2

for (var i = 0; i < 5; i++) {
  (() => {
    let j = i;
    result.push(() => console.log(i));
  })();
}

result[2](); // 2

(() => {})();
(function name() {})();
