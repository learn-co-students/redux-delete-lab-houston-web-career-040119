import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        {this.props.name}
        <button onClick={() => this.props.deleteBand(this.props.id)}>Delete</button>
      </li>
    );
  }
};

export default Band;
