import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

function App() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    hobbies: '',
    note: 'This is note',
    avatar: '',
  });
  // const [fie, seltFile] = useState();
  // const [errorPassword, setErrorPassword] = useState('');

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  //   // pattern, regex
  // };

  // const handleAvatarChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(form);
  //   if (form.password.length < 6) {
  //     setErrorPassword('Mật khẩu phải ít nhất 6 ký tự!');
  //   } else {
  //     setErrorPassword('');
  //   }
  //   const formData = new FormData();
  //   for (let o in form) {
  //     formData.append(o, form[o]);
  //   }
  //   formData.append('avatar', file);
  //   console.log(formData.values);
  //   // if (errorPassword || errorUsername || errorEmail) return;
  //   // TODO: goi api luu thong tin dang ky
  // };

  return (
    <>
      <h1>Register</h1>
      <Formik
        // validate={(values) => {
        //   const errors = {};
        //   if (values.username.trim() === '') {
        //     errors.username = 'Vui lòng nhập tài khoản!';
        //   }
        //   if (values.email.trim() === '') {
        //     errors.email = 'Vui lòng nhập email!';
        //   }
        //   return errors;
        // }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(2, 'More than 2 characters')
            .required('Required'),
          password: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        initialValues={form}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && touched.username && errors.username}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
              />
              {/* {errorPassword && <p style={{ color: 'red' }}>{errorPassword}</p>} */}
              {errors.password && touched.password && errors.password}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email && errors.email}
            </div>
            {/* <div>
            <label htmlFor="hobbies">Hobbies</label>
            <select
              name="hobbies"
              id="hobbies"
              value={form.hobbies}
              onChange={handleChange}
            >
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JS">JS</option>
            </select>
          </div>
          <div>
            <label htmlFor="note">Note</label>
            <textarea
              name="note"
              id="note"
              value={form.note}
              onChange={handleChange}
            ></textarea>
          </div> */}
            {/* <div>
            <input
              accept="image/*"
              type="file"
              name="avatar"
              onChange={handleAvatarChange}
              id="avatar"
            />
          </div> */}
            <button>Register</button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default App;
