import React from "react";
import ReactDOM from "react-dom/client";
import StudentList from "./components/StudentList";
import { students } from "./data/students";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const sum = (a, b) => a + b;

console.log(sum(10, 5)); // 15
console.log(sum(10, 5)); // 15

// ES6: Arrow function
// const StudentList = (props) => {
//   console.log(props);
//   return (
//     <ul>
//       {props.students.map((item, index) => {
//         return (
//           <li key={index}>
//             {item.name} - {item.age}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// class ES6, kế thừa từ lớp React.Component
// Phải có hàm render(): trả về element (JSX) hoặc null

root.render(
  <StudentList
    className="container"
    title="Danh sách học viên"
    students={students}
  />
);
