const first = () => console.log('First');
const second = () => console.log('Second');
const third = () => console.log('Third');

first();
second();
third();

first();
setTimeout(second, 0);
setTimeout(second, 0);
third();
