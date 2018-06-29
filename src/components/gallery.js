import React, { Component } from 'react';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideNum: props.slideNum
    };
  }

  componentDidMount(){
    const count = document.querySelectorAll('.image').forEach((img) => {
      img.addEventListener('click', () => {
        alert(img.innerHTML);
      });
    });
  }

  closeGallery = (e) => {
    e.preventDefault();
    this.setState({
      slideNum: ''
    })
  };

  render() {
    return (
        <div>
          <a href="#" onClick={event => this.closeGallery(event)}>close</a>
          slide is: {this.state.slideNum}.
        </div>
    );
  }
}