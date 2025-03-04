export async function getServerSideProps() {
  const request = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await request.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default function Page({ data }) {
  return (
    <>
      <ul>
        {data.length ? (
          data.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <>No data</>
        )}
      </ul>
    </>
  );
}
