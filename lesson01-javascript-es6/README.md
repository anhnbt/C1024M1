## **Assignment: Tạo và Quản lý Danh sách Sản phẩm**

### **Mục tiêu**
- Sử dụng các cú pháp ES6 như `let`, `const`, arrow function, destructuring, template literals, và các phương thức mảng (`map`, `filter`, `reduce`).
- Viết mã JavaScript để xử lý danh sách sản phẩm.

---

### **Đề bài**

Bạn được giao nhiệm vụ tạo một chương trình quản lý danh sách sản phẩm. Hãy hoàn thành các bước sau:

1. **Tạo một danh sách sản phẩm**:
    - Khởi tạo một mảng `products` chứa các sản phẩm. Mỗi sản phẩm là một đối tượng có các thuộc tính sau:
        - `id` (số nguyên): Mã sản phẩm.
        - `name` (chuỗi): Tên sản phẩm.
        - `price` (số thực): Giá sản phẩm.
        - `quantity` (số nguyên): Số lượng sản phẩm.

   **Ví dụ danh sách sản phẩm**:
   ```javascript
   const products = [
     { id: 1, name: "Laptop", price: 1500, quantity: 5 },
     { id: 2, name: "Smartphone", price: 800, quantity: 10 },
     { id: 3, name: "Tablet", price: 600, quantity: 7 }
   ];
   ```

2. **Viết hàm hiển thị sản phẩm**:
    - Sử dụng `map` và `template literals` để in ra danh sách sản phẩm dưới dạng:
      ```
      ID: 1, Name: Laptop, Price: $1500, Quantity: 5
      ID: 2, Name: Smartphone, Price: $800, Quantity: 10
      ID: 3, Name: Tablet, Price: $600, Quantity: 7
      ```

3. **Tính tổng giá trị hàng tồn kho**:
    - Viết một hàm `calculateTotalValue` sử dụng `reduce` để tính tổng giá trị hàng tồn kho (giá trị = `price * quantity`).

4. **Lọc sản phẩm theo giá**:
    - Viết một hàm `filterByPrice` nhận một tham số `minPrice` và trả về danh sách các sản phẩm có giá lớn hơn hoặc bằng `minPrice`.

5. **Thêm sản phẩm mới**:
    - Viết một hàm `addProduct` để thêm sản phẩm mới vào danh sách. Sản phẩm mới được truyền vào dưới dạng một đối tượng.

6. **Xóa sản phẩm**:
    - Viết một hàm `removeProductById` nhận tham số `id` và xóa sản phẩm có `id` tương ứng khỏi danh sách.

7. **Cập nhật số lượng sản phẩm**:
    - Viết một hàm `updateQuantity` nhận tham số `id` và `newQuantity`, cập nhật số lượng của sản phẩm có `id` tương ứng.

---

### **Yêu cầu**
1. Mỗi yêu cầu phải được viết thành một hàm riêng biệt với cú pháp ES6 (arrow function).
2. Kết quả từng bước phải được in ra console để kiểm tra.
3. Cố gắng tối ưu mã bằng cách sử dụng cú pháp hiện đại của JavaScript.

---

### **Gợi ý
1. **Hiển thị sản phẩm**:
    - Sử dụng `map` để lặp qua danh sách sản phẩm và trả về một chuỗi format.

2. **Tính tổng giá trị hàng tồn kho**:
    - Sử dụng `reduce` để cộng dồn giá trị của từng sản phẩm (`price * quantity`).

3. **Lọc sản phẩm theo giá**:
    - Sử dụng `filter` để trả về các sản phẩm có `price >= minPrice`.

4. **Thêm sản phẩm mới**:
    - Sử dụng `push` hoặc spread operator (`...`) để thêm sản phẩm vào mảng.

5. **Xóa sản phẩm**:
    - Sử dụng `filter` để tạo một mảng mới mà không chứa sản phẩm có `id` đã cho.

6. **Cập nhật số lượng**:
    - Sử dụng `map` để tìm và cập nhật số lượng sản phẩm dựa trên `id`.

---

### **Kết quả mong đợi**
Học viên sẽ hiểu rõ cách áp dụng cú pháp ES6 để xử lý dữ liệu mảng và đối tượng trong các bài toán thực tế.

---

