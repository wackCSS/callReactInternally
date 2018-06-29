import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    // state obj for component
    this.state = {
      inputValue: ''
    }
  }

  updateText = (e, value) => {
    e.preventDefault();

    this.setState({
      headingText: this.state.inputValue
    });
    this.props.changeText(this.state.inputValue);
    this.setState({
      headingText: this.state.inputValue
    });
  };

  render() {
    return (
        <div>
          <p>state: {this.state.inputValue}</p>
          <input type="text" onChange={event => this.setState({inputValue: event.target.value})} placeholder="Enter text" />
          <button onClick={event => this.updateText(event)}>{this.props.buttonText}</button>
        </div>
    )
  }
};

export default Button;