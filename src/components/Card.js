import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Card.css';

const Card = () => (
  <div styleName='card'>
    <div styleName='card__info'>
      <h2>Simon Nonnis</h2>
      <p>JavaScript Dev</p>
      <div>
        <p>07563927412</p>
        <p>simon.nonnis@email.com</p>
      </div>
      <div styleName='cardInfo__socialLinks'>
        <ul styleName='socialLinks__ul'>
          <li styleName='socialLinks__elm'>
            <a styleName='elm__link' href="#">W</a>
          </li>
          <li styleName='socialLinks__elm'>
            <a styleName='elm__link' href="#">C</a>
          </li>
          <li styleName='socialLinks__elm'>
            <a styleName='elm__link' href="#">G</a>
          </li>
          <li styleName='socialLinks__elm'>
            <a styleName='elm__link' href="#">G</a>
          </li>
        </ul>
      </div>
    </div>
    <div styleName='card__team'>
      <span>Front End</span>
    </div>
  </div>
);

export default CSSModules(Card, styles, { allowMultiple: true });
