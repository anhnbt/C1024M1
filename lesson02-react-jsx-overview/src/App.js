import React from "react";
import "./App.css";
import "./styles.css";

function App() {
  // return React.createElement("h1", { id: "headline" }, "Hello World!");
  // return (
  //   <div>
  //     <h1>Hello World</h1>
  //     <ul>
  //       <li>HTML</li>
  //       <li>CSS</li>
  //       <li>JavaScript</li>
  //     </ul>
  //   </div>
  // );
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello World"),
    React.createElement(
      "ul",
      { className: "list-menu" },
      React.createElement("li", { className: "list-item" }, "HTML"),
      React.createElement("li", { className: "list-item" }, "CSS"),
      React.createElement("li", { className: "list-item" }, "JavaScript")
    )
  );
}

export default App;

// JSX: JavaScript XML, cú pháp tương tự như HTML
// Viết mã HTML trực tiếp vào JS
// Hỗ trợ viết biểu thức {} của JS vào mã HTML
// JSX không bắt buộc phải sử dụng ReactJS
// BabelJS compile JSX => React.createElement
// class => camelCase => className
