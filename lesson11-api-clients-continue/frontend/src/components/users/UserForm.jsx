import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

const UserForm = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:3004/users/${id}`);
      setName(response.data.name);
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`http://localhost:3004/users/${id}`, { name });
      toast.success('Cập nhật người dùng thành công!');
      navigate('/');
    } else {
      await axios.post('http://localhost:3004/users', { name });
      toast.success('Thêm mới người dùng thành công!');
      setName('');
      navigate('/');
    }
  };

  return (
    <>
      <h2>User Detail</h2>
      <NavLink to={'/'}>Back to Home</NavLink>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <div className="d-flex">
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn btn-success">
            {id ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
