import { Component } from 'react';
import './SignInForm.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: '',
      isLoggedIn: false,
    };

    // Ràng buộc this cho các hàm (phương thức) khi sử dụng this
    this.handleSubmit = this.handleSubmit.bind(this);

    // Initialization: Giai đoạn khởi tạo
    console.log(
      'Component SigninForm khởi tạo các giá trị ban đầu cho state hoặc props đã cho'
    );
  }

  // Giai đoạn Mouting
  componentDidMount() {
    document.title = 'Login Page';
    // TODO: Gọi API ở đây
    console.log(': Được gọi ngay sau khi giai đoạn khởi tạo hoàn thành!');
  }

  shouldComponentUpdate() {
    return true;
  }

  // Giai đoạn Updating
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.username !== this.state.username ||
      prevState.password !== this.state.password
    ) {
      if (this.state.username.includes('$')) {
        this.setState({
          error: 'Định dạng username không đúng! (Chỉ chứa kí tự [a-zA-Z0-9])',
        });
      }
      console.log('Hàm componentDidUpdate được gọi!');
    }
  }

  // Giai đoạn Unmouting
  componentWillUnmount() {
    console.log('Hàm componentWillUnmount được gọi!');
    document.title = 'React App';
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.username === 'admin' && this.state.password === 'admin') {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ error: 'Sai thông tin đăng nhập!' });
    }
  }

  // // Arrow function
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state);
  // };

  logout = () => {
    this.setState({ isLoggedIn: false, username: '', password: '' });
  };

  render() {
    console.log('Hàm render() được gọi');
    return this.state.isLoggedIn ? (
      <button onClick={() => this.logout()}>Logout</button>
    ) : (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          {this.state.error && (
            <p style={{ color: 'red' }}>{this.state.error}</p>
          )}
          <input
            type="text"
            placeholder="Username"
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <button type="submit">Sign in</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
