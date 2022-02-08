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

students.forEach(function (student) {
  const averageMark = student.marks.reduce((item, index) => {
    return item + index / student.marks.length;
  }, 0);
  student.averageMark = averageMark;
});
console.log(students);
const arrayOfAverage = students.map((item) => {
  students.averageMark + " ";
  const array = students.map(({ averageMark }) => averageMark);
  const averageOfAllStudents = array.reduce(function (item, index) {
    return item + index / array.length;
  }, 0);
  console.log(averageOfAllStudents);
});
