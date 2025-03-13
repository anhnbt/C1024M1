import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UserList from './components/users/UserList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import UserForm from './components/users/UserForm.jsx';
import UserDetail from './components/users/UserDetail.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/create" element={<UserForm />} />
        <Route path="/users/edit/:id" element={<UserForm />} />
        <Route path="/users/detail/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
