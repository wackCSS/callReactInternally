import React, { Component } from 'react';
import Button from "./button";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'button text',
      headingText: 'This text will change'
    };
  }

  changeText = (value) => {
    console.log(value);
    this.setState({
      headingText: value
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.headingText}</h1>
        <Button changeText={this.changeText} buttonText={this.state.buttonText} />
      </div>
    );
  }
}
