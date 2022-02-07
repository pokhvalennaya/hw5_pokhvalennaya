// task 1

// const searchString = (originalStr, str) => originalStr.includes(str);

// console.log(searchString("Hello", "llo")); // true
// console.log(searchString("Hello", "www")); // false

// task 2

const capitalizeFirstLetter = (string) =>
  string[0].toUpperCase() + string.slice(1);

console.log(capitalizeFirstLetter("hello")); // Hello
console.log(capitalizeFirstLetter("HELLO")); // HELLO
console.log(capitalizeFirstLetter("hElLo")); // HElLo
