import styled from 'styled-components';
import styles from '../../styles/Blog.module.css';
import { css } from '@emotion/css';

// ./: trỏ vào thư mục hiện tại
// ../: ra ngoài 1 thư mục
// ../..: ra ngoài 2 thư mục
// css-in-js

const Button = styled.button`
  font-size: 1.5em;
  color: #bf4f74;
  border: 1px solid black;
  padding: 6px 12px;
  cursor: pointer;
`;

export async function getStaticProps() {
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
      {/* <Button>Click here!</Button>
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: red;
          }
        `}
      >
        Hover to change color.
      </div> */}
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
