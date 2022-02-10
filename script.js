// task 1

// const searchString = (originalStr, str) => originalStr.includes(str);

// console.log(searchString("Hello", "llo")); // true
// console.log(searchString("Hello", "www")); // false

// task 2

// const capitalizeFirstLetter = (string) =>
//   `${string[0].toUpperCase()}${string.slice(1)}`;

// console.log(capitalizeFirstLetter("hello")); // Hello
// console.log(capitalizeFirstLetter("HELLO")); // HELLO
// console.log(capitalizeFirstLetter("hElLo")); // HElLo

// // task 3

// const truncate = function (str, maxlength) {
//   if (str.length > maxlength) {
//     return `${str.substr(0, maxlength)}…`;
//   } else {
//     return str;
//   }
// };
// console.log(truncate("Hello world", 5)); // Hello...
// console.log(truncate("Hello world", 25)); // Hello world

// task 4

const students = [
  {
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];

function calculateAverageMarkOfStudent(arrayStudents) {
  const studentsWithAverageMark = arrayStudents.slice(0);
  studentsWithAverageMark.forEach(function (studentInformation) {
    const sumOfMarks = studentInformation.marks.reduce(function (sum, current) {
      return sum + current;
    });
    const averageMark = sumOfMarks / studentInformation.marks.length;
    studentInformation.average = averageMark;
  });
  return studentsWithAverageMark;
}
const newStudents = calculateAverageMarkOfStudent(students);
console.log(newStudents);

function getAverageOfAverage(arrayStudentsWithAverage) {
  const sumOfAverage = arrayStudentsWithAverage
    .map((informationWithAverage) => informationWithAverage.average)
    .reduce((sum, current) => sum + current);
  const averageOfAverage = sumOfAverage / arrayStudentsWithAverage.length;
  return averageOfAverage;
}
console.log(getAverageOfAverage(newStudents));

// task 5

// const vehicles = [
//   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//   { make: "Toyota", model: "Sequoia", type: "SUV", price: 45560 },
//   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//   { make: "Ford", model: "Explorer", type: "SUV", price: 31660 },
// ];

// const suvType = vehicles.filter(function (vehicle) {
//   return vehicle.type.toLowerCase() == "suv";
// });
// console.log(suvType);

// const suvPriceArray = suvType.map(({ price }) => price);
// const suvPrice = suvPriceArray.reduce(function (previousValue, currentValue) {
//   return previousValue + currentValue / suvPriceArray.length;
// }, 0);
// console.log(suvPrice);

// task 6

// let arr = [10, 20, 3, 4, 0, 99, 97];
// let sorted = copySorted(arr);

// function copySorted(arr) {
//     return arr.slice().sort((a, b) => a - b);
//   }

// console.log(arr); // [10, 20, 3, 4, 0, 99, 97] - массив не должен изменится!
// console.log(sorted); // [0, 3, 4, 10, 20, 97, 99]

// task 7

// const getKeysCount = (obj) => Object.keys(obj).length;

// console.log(getKeysCount({ name: "John" })); // 1
// console.log(getKeysCount({ name: "John", age: 22 })); // 2
// console.log(getKeysCount({ name: "John", salary: null })); // 2
