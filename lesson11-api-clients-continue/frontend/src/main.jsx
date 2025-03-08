import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UserList from './components/users/UserList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserList />
  </StrictMode>
);
