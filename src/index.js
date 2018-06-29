import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/app';
import Gallery from './components/gallery';

window.imGallery = function(slideNum) {
  console.log(slideNum);
  ReactDOM.render(
      <Gallery slideNum={slideNum} />
      , document.querySelector('.container'));
};