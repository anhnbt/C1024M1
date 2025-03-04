import Link from 'next/link';

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link href="/">Quay lại</Link>
    </>
  );
}

// Tự động tạo route dựa trên tên file hoặc folder
// react router dom

{
  /* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
  </Routes>
</BrowserRouter> */
}
