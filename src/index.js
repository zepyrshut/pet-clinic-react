import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import MainContent from './components/MainContent';

// Styles
import './index.css';
import 'flowbite';


WebFont.load({
  google: {
    families: ['Amatic SC:400,700', 'Bebas Neue:400', 'Roboto:400,500,700'],
  }
});

ReactDOM.render(
  <Fragment>

    <MainContent />


  </Fragment>, document.getElementById('root'));

