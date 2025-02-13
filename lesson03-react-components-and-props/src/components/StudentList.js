import React from "react";

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  // override
  render() {
    return (
      <div className={this.props.className}>
        <h1>{this.props.title}</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.props.students.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;

// Module (import/export)
