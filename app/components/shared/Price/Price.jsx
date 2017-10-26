import React from 'react';
import styles from './styles.scss';

const Price = ({ amount, currency }) => (
  <div className={styles.container}>
    <div className={styles.currency}>
      {currency}
    </div>
    <div className={styles.amount}>
      {amount}
    </div>
  </div>
);

Price.defaultProps = {
  currency: 'ARS',
};

export default Price;