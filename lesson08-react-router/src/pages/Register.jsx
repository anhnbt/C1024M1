import { NavLink } from 'react-router';
import logo from '../assets/CodeGym-Logo.webp';

const Register = () => {
  return (
    <>
      <h1>Đăng ký</h1>
      <form action="">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <button>Đăng ký</button>
        <p>
          Nếu đã có tài khoản, <NavLink to="/login">Đăng nhập</NavLink>
        </p>
      </form>
    </>
  );
};

export default Register;
