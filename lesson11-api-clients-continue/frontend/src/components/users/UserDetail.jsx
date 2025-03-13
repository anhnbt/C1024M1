import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:3004/users/${id}`);
      setUser(response.data);
    };

    fetchUser();
  }, [id]);

  return (
    <>
      <h2>User Detail</h2>
      <NavLink to="/">Back to Home</NavLink>
      {user && (
        <ul>
          <li>ID: {user.id}</li>
          <li>Name: {user.name}</li>
        </ul>
      )}
    </>
  );
}
