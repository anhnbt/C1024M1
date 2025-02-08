// var oldVar = "I am var!"; // function scoped, global
// let newLet = "I am let!"; // block scoped
// newLet = "Thinh Nguyen";
// const newConst = "I am const!"; // block scoped,
// console.log(oldVar);
// console.log(newLet);
// console.log(newConst);
// console.log(a); //
// var a = 10; // hoisting
// console.log(a);
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

import Person from "./person.js";
import { message, age } from "./utils.js";

// Person.prototype.sayHello = function () {
//   // Template literal (``)
//   return `Hello, I am ${this.name}`;
// };

// const user = new Person("Tuan", 27);
// console.log(user);
// console.log(user.sayHello());

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     return `Hello, I am ${this.name}`;
//   }
// }

// class Student extends Person {
//   constructor(grade, name, age) {
//     super(name, age);
//     this.grade = grade;
//   }

//   sayHello() {
//     return super.sayHello() + `, my grade: ${this.grade}, ${this.age}`;
//   }
// }

// const user = new Person("Minh", 25);
// console.log(user);
// console.log(user.sayHello());
// const std = new Student(9, "Chien", 30);
// console.log(std);
// console.log(std.sayHello());

// () => {}

// function sayHello() {
//   console.log("Hello World");
// }
// sayHello();
// const sayHello = (name) => {
//   console.log("Hello " + name);
// };
// const sayHello = (name) => console.log(`Hello ${name}`);
// sayHello("Minh");
// const numbers = [];
// const doubled = numbers.map((n) => n * 2);
// console.log(doubled);
// const evens = numbers.filter((n) => n % 2 !== 0);
// console.log(evens);
// const sum = numbers.reduce((acc, n) => acc + n, 0);
// console.log(sum);
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5, 6];
// console.log("Day la mang", "arr2", arr2);
// const obj1 = { name: "Minh", age: 25 };
// const obj2 = { obj1, grade: 9 };
// console.log(obj2);
// const age = 20;
// if (age > 18) {
//   console.log("Đủ tuổi!");
// } else {
//   console.log("Chưa đủ tuổi!");
// }
// console.log(age > 18 ? "Đủ tuổi" : "Chưa đủ tuổi!");
// const isAdmin = false;

// console.log(isAdmin ? "Dashboard" : "Bạn có quyền vào màn hình này!");
const user = new Person("Minh", 25);
console.log(user);

console.log(message, age);

const obj = {
  name: "Chien",
  age: 30,
  grade: 9,
};
// const name = obj.name;
// const age = obj.age;
// const grade = obj.grade;
const { name, grade } = obj;
console.log(name, age, grade);
const fruits = ["Apple", "Banana"];
fruits.push("Orange");
// const firstFruit = fruits[0];
// const secondFruit = fruits[1];
const [first, second, three] = fruits;
console.log(first, second, three);
