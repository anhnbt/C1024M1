import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import userAPI from '../../services/userAPI';
import { toast } from 'react-toastify';
import { FaEdit, FaEye, FaPlus, FaTrashAlt } from 'react-icons/fa';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    userAPI.getUsers().then((data) => setUsers(data));
  }, []);

  const handleDelete = async (id) => {
    console.log('Xoa user', id);
    if (window.confirm('Bạn có thực sự muốn xóa người dùng này không?')) {
      await userAPI.deleteUserById(id);
      setUsers((prevState) => prevState.filter((item) => item.id !== id));
      toast.success('Xóa người dùng thành công!');
    }
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between mb-3">
        <h1>Users</h1>
        <button
          className="btn btn-success"
          onClick={() => navigate('/users/create')}
        >
          <FaPlus /> Add User
        </button>
      </div>
      {users.length === 0 ? (
        <p>Không có dữ liệu.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th style={{ width: '180px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td className="d-flex gap-2 justify-content-center">
                  <button
                    className="btn btn-info"
                    onClick={() => navigate(`/users/detail/${item.id}`)}
                  >
                    <FaEye />
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/users/edit/${item.id}`)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
