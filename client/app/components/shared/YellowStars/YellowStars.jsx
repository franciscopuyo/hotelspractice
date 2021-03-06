import React from 'react';
import Icon from '../Icon';
import styles from './styles.scss';

const YellowStars = ({ quantity, size }) =>
  new Array(quantity).fill().map((item, index) => (
    //  eslint-disable-next-line react/no-array-index-key
    <span key={index} className={styles.starContainer}>
      <Icon icon="Star" fill="#fdba12" size={size} />
    </span>
  ));

export default YellowStars;
