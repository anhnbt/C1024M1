import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import avatarUrl from "./coding.gif";

// Element: Phần tử nhỏ nhất trong ứng dụng ReactJS, nó thể hiện UI
// Cách 1: Sử dụng từ khóa React.createElement
// Cách 2: Sử dụng cú pháp JSX, hỗ trợ chèn biểu thức bằng dấu {}
const name = "CodeGym";
const img = "https://unsplash.it/300";
const element = (
  // Shorthand
  <>
    <h1 className="heading">{name}</h1>
    <img src={avatarUrl} alt="Ảnh đại diện" />
  </>
);
// const element = React.createElement(
//   "h2",
//   { className: "heading", id: "heading", title: "Đây là tiêu đề" },
//   "Hello World!"
// );
console.log(element);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

// JSX: Viết tắt của JavaScript XML
// Cú pháp mở rộng của JavaScript cho phép viết mã gần giống HTML trong JavaScript

// Tên dự án: lowercase, dấu cách thay bằng dấu gạch ngang hoặc gạch dưới
// Không chứa ký tự đặc biệt
