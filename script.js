// task 1

// const searchString = (originalStr, str) => originalStr.includes(str);

// console.log(searchString("Hello", "llo")); // true
// console.log(searchString("Hello", "www")); // false

// task 2

// const capitalizeFirstLetter = (string) =>
//   string[0].toUpperCase() + string.slice(1);

// console.log(capitalizeFirstLetter("hello")); // Hello
// console.log(capitalizeFirstLetter("HELLO")); // HELLO
// console.log(capitalizeFirstLetter("hElLo")); // HElLo

// task 3

// const truncate = function (str, maxlength) {
//   if (str.length > maxlength) {
//     return str.substr(0, maxlength) + "…";
//   } else {
//     return str;
//   }
// };
// console.log(truncate("Hello world", 5)); // Hello...
// console.log(truncate("Hello world", 25)); // Hello world

// task 4

// const students = [
//   {
//     name: "John Smith",
//     marks: [10, 8, 6, 9, 8, 7],
//   },
//   {
//     name: "John Doe",
//     marks: [9, 8, 7, 6, 7],
//   },
//   {
//     name: "Thomas Anderson",
//     marks: [6, 7, 10, 8],
//   },
//   {
//     name: "Jean-Baptiste Emanuel Zorg",
//     marks: [10, 9, 8, 9],
//   },
// ];

// students.forEach(function (student) {
//   const averageMark = student.marks.reduce((item, index) => {
//     return item + index / student.marks.length;
//   }, 0);
//   student.averageMark = averageMark;
// });
// console.log(students);

// const array = students.map(({ averageMark }) => averageMark);
// const averageOfAllStudents = array.reduce(function (item, index) {
//   return item + index / array.length;
// }, 0);
// console.log(averageOfAllStudents);

// task 5

const vehicles = [
  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
  { make: "Toyota", model: "Sequoia", type: "SUV", price: 45560 },
  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
  { make: "Ford", model: "Explorer", type: "SUV", price: 31660 },
];

const suvType = vehicles.filter(function (vehicle) {
  return vehicle.type == "suv" || vehicle.type == "SUV";
});
console.log(suvType);

const suvPriceArray = suvType.map(({ price }) => price);
const suvPrice = suvPriceArray.reduce(function (item, index) {
  return item + index / suvPriceArray.length;
}, 0);
console.log(suvPrice);
