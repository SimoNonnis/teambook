import React from 'react';
import CSSModules from 'react-css-modules';

import Card from './Card';

import styles from './App.css';


const App = () => (
  <div styleName='app'>
      <div styleName='intro'>
        <h1 className='global-css' styleName='title'>teambook</h1>
        <p>Find all the info you need about your colleagues</p>
      </div>
      <Card />
  </div>
);

export default CSSModules(App, styles, { allowMultiple: true });
