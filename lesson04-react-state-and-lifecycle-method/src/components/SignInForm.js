import { Component } from "react";
import "./SignInForm.css";

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    // Ràng buộc this cho các hàm (phương thức) khi sử dụng this
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Arrow function
  // handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(this);
  //   console.log(this.state);
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
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
