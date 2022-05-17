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


    </Fragment>




 

  , document.getElementById('root'));

