import { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch return Promise => Lời hứa => trả ra 2 trạng thái có dữ liệu hoặc không
    // .then(): thành công
    // .catch(): thất bại
    fetch('http://localhost:3004/products?_expand=category')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => alert('Lỗi hệ thống, vui lòng thử lại'));
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:3004/products/${id}`);
    // TODO: thong bao xoa thanh cong
    setProducts((prevState) => [...prevState.filter((item) => item.id !== id)]);
  };

  return <ProductList productList={products} handleDelete={handleDelete} />;
}

export default App;
