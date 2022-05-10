import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './components/App';

// Styles
import './index.css';

WebFont.load({
  google: {
    families: ['Amatic SC:400,700', 'Bebas Neue:400', 'Roboto:400,500,700'],
  }
});

ReactDOM.render(

  <Fragment>
    <App /> 




<hr />

<div>
  <span>a-gray-soft</span>
  <div className="bg-a-gray-soft w-10 h-10"></div>
  <span>a-gray-medium</span>
  <div className="bg-a-gray-medium w-10 h-10"></div>
  <span>a-gray-dark</span>
  <div className="bg-a-gray-dark w-10 h-10"></div>
  <span>a-black-soft</span>
  <div className="bg-a-black-soft w-10 h-10"></div>
  <span>a-black-dark</span>
  <div className="bg-a-black-dark w-10 h-10"></div>
  <span>nature-dark-purple</span>
  <div className="bg-nature-dark-purple w-10 h-10"></div>
  <span>nature-black</span>
  <div className="bg-nature-black w-10 h-10"></div>
  <span>nature-dark-blue</span>
  <div className="bg-nature-dark-blue w-10 h-10"></div>
  <span>nature-soft-blue</span>
  <div className="bg-nature-soft-blue w-10 h-10"></div>
  <span>nature-soft-sea-blue</span>
  <div className="bg-nature-soft-sea-blue w-10 h-10"></div>
</div>


  </Fragment>

  , document.getElementById('root'));

