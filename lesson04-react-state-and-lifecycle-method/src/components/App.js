import React, { Component } from "react";

// Class Component
class App extends Component {
  constructor(props) {
    super(props);
    // Khai báo dữ liệu là một biến count có giá trị mặc định: 4
    this.state = {
      count: 9,
      name: "CodeGym",
      addressStreet: "Mỹ Đình",
      addressCity: "Hà Nội",
    };
  }

  decrementCount = () => {
    // Bất đồng bộ
    // this.setState({ count: this.state.count - 3 });
    // this.setState({ count: this.state.count - 3 });
    // this.setState({ count: this.state.count - 3 });
    // this.setState(
    //   (prevState) => ({
    //     count: prevState.count - 1,
    //   }),
    //   () => {
    //     console.log("Đã cập nhật state", this.state.count);
    //   }
    // );
    // this.setState((prevState) => ({
    //   count: prevState.count - 1,
    // }));
    // this.setState((prevState) => ({
    //   count: prevState.count - 1,
    // }));
  };

  incrementCount = (value) => {
    this.setState({ count: this.state.count + value });
  };

  // Hàm render()
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={() => this.incrementCount(3)}>Increment +3</button>
        <p>{this.state.name}</p>
        <p>{this.state.addressCity}</p>
        <p>{this.state.addressStreet}</p>
      </div>
    );
  }
}

export default App;
