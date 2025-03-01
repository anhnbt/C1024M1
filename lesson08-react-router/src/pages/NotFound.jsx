import { NavLink } from 'react-router';

const NotFound = () => {
  return (
    <>
      <h1>Trang tìm thấy hoặc đã bị xóa</h1>
      <p>Vui lòng liên hệ Admin để biết thêm thông tin!</p>
      <NavLink to="/">Quay lại</NavLink>
    </>
  );
};

export default NotFound;
