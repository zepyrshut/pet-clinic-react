import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import WebFont from 'webfontloader';
// Styles
import './index.css';
// Components
import { TopHeader } from './components/TopHeader';
import RouterPetClinic from './router/RouterPetClinic';

WebFont.load({
  google: {
    families: ['Amatic SC:400,700', 'Bebas Neue:400', 'Roboto:400,500,700'],
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <TopHeader />
    <RouterPetClinic />
  </Fragment>
);