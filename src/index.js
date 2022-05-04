import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import WebFont from 'webfontloader';
import MainContent from './components/MainContent';

// Styles
import './index.css';


WebFont.load({
  google: {
    families: ['Amatic SC:400,700', 'Bebas Neue:400', 'Roboto:400,500,700'],
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Fragment>

    <MainContent />

  </Fragment>
);
