import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import SignInForm from './components/SignInForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginForm: false,
    };
  }

  toggleShowLoginForm = () => {
    this.setState({ showLoginForm: !this.state.showLoginForm });
  };

  render() {
    return (
      <>
        {this.state.showLoginForm && <SignInForm />}
        <button onClick={() => this.toggleShowLoginForm()}>
          Ẩn/Hiện Login
        </button>
      </>
    );
  }
}

// root.render(<App />);
root.render(<Home />);
