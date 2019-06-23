import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        {this.props.band.name}
        <button onClick={() => this.props.deleteBand(this.props.band.id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
