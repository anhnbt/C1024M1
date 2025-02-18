## **Bài thực hành ES6: Làm quen với cú pháp cơ bản**

---

### **Mục tiêu 1: Hiểu cách sử dụng let và const**
- Học cách khai báo biến với `let` và `const`.
- Phân biệt được khi nào nên dùng `let` và `const`.

#### **Bước 1: Thực hành**
1. Khai báo biến `city` bằng `let` và gán giá trị `"Hà Nội"`.
   ```javascript
   let city = "Hà Nội";
   console.log(city); // Kết quả: "Hà Nội"
   ```

2. Thay đổi giá trị của `city` thành `"Hồ Chí Minh"` và in kết quả.
   ```javascript
   city = "Hồ Chí Minh";
   console.log(city); // Kết quả: "Hồ Chí Minh"
   ```

3. Khai báo biến `country` bằng `const` và gán giá trị `"Việt Nam"`.
   ```javascript
   const country = "Việt Nam";
   console.log(country); // Kết quả: "Việt Nam"
   ```

4. Thử thay đổi giá trị của `country` và quan sát lỗi.
   ```javascript
   // country = "Lào"; // Lỗi: Assignment to constant variable.
   ```

#### **Kết luận:**
- `let` cho phép thay đổi giá trị, trong khi `const` không cho phép.

---

### **Mục tiêu 2: Viết hàm bằng Arrow Function**
- Làm quen với cú pháp của arrow function.
- So sánh với hàm truyền thống.

#### **Bước 1: Thực hành**
1. Viết hàm `sayHello` sử dụng arrow function:
   ```javascript
   const sayHello = (name) => `Hello, ${name}!`;
   console.log(sayHello("Alice")); // Kết quả: "Hello, Alice!"
   ```

2. Viết một arrow function không tham số trả về `"Welcome to ES6!"`:
   ```javascript
   const welcome = () => "Welcome to ES6!";
   console.log(welcome()); // Kết quả: "Welcome to ES6!"
   ```

#### **Kết luận:**
- Arrow function giúp viết hàm ngắn gọn và dễ đọc hơn.

---

### **Mục tiêu 3: Sử dụng Template Literals**
- Tạo chuỗi sử dụng cú pháp Template Literals.
- Hiểu lợi ích khi sử dụng thay vì nối chuỗi truyền thống.

#### **Bước 1: Thực hành**
1. Sử dụng template literals để giới thiệu bản thân:
   ```javascript
   const name = "John";
   const age = 30;
   const city = "New York";
   const introduction = `My name is ${name}. I am ${age} years old and I live in ${city}.`;
   console.log(introduction);
   // Kết quả: "My name is John. I am 30 years old and I live in New York."
   ```

2. Tạo chuỗi HTML bằng template literals:
   ```javascript
   const html = `
     <h1>Hello, John</h1>
     <p>Welcome to ES6</p>
   `;
   console.log(html);
   ```

#### **Kết luận:**
- Template literals dùng dấu backtick (\``) giúp viết chuỗi đa dòng và nội suy dễ dàng.

---

### **Mục tiêu 4: Làm việc với Destructuring**
- Trích xuất giá trị từ đối tượng và mảng bằng destructuring.

#### **Bước 1: Thực hành**
1. Destructuring đối tượng:
   ```javascript
   const product = { name: "Laptop", price: 1500, brand: "Dell" };
   const { name, price } = product;
   console.log(name); // Kết quả: "Laptop"
   console.log(price); // Kết quả: 1500
   ```

2. Destructuring mảng:
   ```javascript
   const colors = ["red", "blue", "green"];
   const [color1, color2] = colors;
   console.log(color1); // Kết quả: "red"
   console.log(color2); // Kết quả: "blue"
   ```

#### **Kết luận:**
- Destructuring giúp trích xuất giá trị từ đối tượng hoặc mảng dễ dàng hơn.

---

### **Mục tiêu 5: Sử dụng Spread và Rest Operator**
- Hiểu cách sao chép và mở rộng mảng/đối tượng với spread operator.
- Gom tham số với rest operator.

#### **Bước 1: Thực hành**
1. Sao chép mảng với spread operator:
   ```javascript
   const fruits = ["apple", "banana", "orange"];
   const newFruits = [...fruits, "mango"];
   console.log(newFruits); // Kết quả: ["apple", "banana", "orange", "mango"]
   ```

2. Viết hàm tính tổng các số bằng rest operator:
   ```javascript
   const sumAll = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
   console.log(sumAll(1, 2, 3, 4)); // Kết quả: 10
   ```

#### **Kết luận:**
- Spread operator sao chép và mở rộng mảng/đối tượng.
- Rest operator gom các tham số lại thành một mảng.

---

### **Mục tiêu 6: Làm việc với Map, Filter, Reduce**
- Thao tác dữ liệu mảng một cách linh hoạt.

#### **Bước 1: Thực hành**
1. Dùng `map` để nhân đôi các số trong mảng:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const doubled = numbers.map((num) => num * 2);
   console.log(doubled); // Kết quả: [2, 4, 6, 8, 10]
   ```

2. Dùng `filter` để lấy số chẵn:
   ```javascript
   const evenNumbers = numbers.filter((num) => num % 2 === 0);
   console.log(evenNumbers); // Kết quả: [2, 4]
   ```

3. Dùng `reduce` để tính tổng:
   ```javascript
   const sum = numbers.reduce((acc, num) => acc + num, 0);
   console.log(sum); // Kết quả: 15
   ```

#### **Kết luận:**
- `map` để biến đổi mảng, `filter` để lọc, và `reduce` để gộp giá trị.

---

### **Mục tiêu 7: Tích hợp tất cả kiến thức**
- Sử dụng tất cả kiến thức để giải quyết bài toán tổng hợp.

**Bài tập:**  
Viết hàm `processArray` thực hiện:
1. Nhân đôi các số trong mảng (`map`).
2. Lọc các số lớn hơn 5 (`filter`).
3. Tính tổng các số còn lại (`reduce`).

#### **Lời giải:**
```javascript
const processArray = (arr) => {
  const doubled = arr.map((num) => num * 2);
  const filtered = doubled.filter((num) => num > 5);
  const total = filtered.reduce((acc, num) => acc + num, 0);
  return total;
};

console.log(processArray([1, 2, 3, 4])); // Kết quả: 14
```

---

Các bài thực hành trên đều có hướng dẫn chi tiết, mục tiêu rõ ràng giúp học viên dễ theo dõi và nắm vững cú pháp ES6. Nếu bạn cần bổ sung nội dung hoặc chỉnh sửa, mình sẽ hỗ trợ!
