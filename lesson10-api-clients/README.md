# Bài học API Client

## Thư viện sử dụng
- **MOCK API**: [json-server](https://github.com/typicode/json-server/tree/v0)
- **HTTP Request**: [Axios](https://axios-http.com/docs/intro)

## Cấu trúc thư mục
Dự án được chia thành 2 thư mục:
- **backend**: Chạy `json-server` để tạo MOCK API.
- **frontend**: Chạy dự án ReactJS.

## Cài đặt
### Backend
#### Cài đặt json-server

Cài đặt toàn cục (nếu chưa có json-server):

```sh
cd backend
npm install -g json-server
```

Hoặc cài đặt trong dự án:

```sh
npm install json-server --save-dev
```

#### Chạy json-server
```sh
json-server --watch db.json --port 3004
```
**Lưu ý:** `json-server` hiện tại và mới hơn thay cho `connect-api-mocker` vì có hiệu suất tốt hơn, dễ cấu hình và hỗ trợ RESTful API tốt hơn. Tuy nhiên, các bạn vẫn nên dành thời gian thực hành sử dụng `connect-api-mocker` trong khóa học trên hệ thống James để hiểu thêm về cách hoạt động của các công cụ giả lập API.

### Frontend
#### Tạo dự án ReactJS bằng Vite
```sh
npm create vite@latest
```
Khi được hỏi tên dự án, nhập `frontend`.
Sau đó, di chuyển vào thư mục `frontend` và cài đặt các gói cần thiết:
```sh
cd frontend
npm install
```
#### Cài đặt axios
```sh
npm install axios
```

## Nội dung bài học
Trong bài có sử dụng `fetch API` của JavaScript và thư viện `axios` để gọi API.

Có 2 cách dùng Promise:
1. `.then().catch()`
2. `async/await`

Buổi sau sẽ hoàn thiện dự án với các tính năng: thêm, sửa, tìm kiếm dữ liệu.

