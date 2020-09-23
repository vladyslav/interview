function funcA() {
  let a = 1;

  function funcB() {
    let b = 2;

    function funcC() {
      let c = 3;
      console.log('funcC:', a, b, c); // 1 2 3
    }
    funcC();
    console.log('funcB:', a, b); // 1 2
  }
  funcB();
  console.log('funcA:', a); // 1
}

funcA();
