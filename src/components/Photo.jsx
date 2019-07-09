import React from 'react';
import PropTypes from 'prop-types';

class NewLikeControl extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.incrementMe = this.incrementMe.bind(this);
  }

  incrementMe() {
    let newCount = this.state.count +1;
    this.setState({
      count: newCount
    })
  }

  render() {
    console.log(this.state.count);

    return (
      <div className="customContainer">
        <h1>Some text here</h1>
        <h1>Some text here</h1>
        <h1>Some text here</h1>
        <button className="btn btn-primary" onClick={this.incrementMe}>
          Likes {this.state.count}</button>

      </div>
    );
  }
}

export default NewLikeControl;
