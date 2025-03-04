import { useRouter } from 'next/router';

// dynamic route (Tuyến đường động: [id].js, [slug].js)
const Post = () => {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;

  return (
    <>
      <h1>My Post: {id}</h1>
    </>
  );
};

export default Post;
