import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideNum: props.slideNum
    };
  }
  render() {
    return (
        <div>
          slide is: {this.state.slideNum}.
        </div>
    );
  }
}