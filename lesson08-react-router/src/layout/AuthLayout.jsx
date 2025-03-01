import { Outlet } from 'react-router';
import logo from '../assets/CodeGym-Logo.webp';
import './AuthLayout.css';

const AuthLayout = () => {
  return (
    <div className="card">
      <img src={logo} alt="Logo" />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
