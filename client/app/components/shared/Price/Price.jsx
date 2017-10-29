import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Price = ({ amount, currency }) => (
  <div className={styles.container}>
    {(amount > 0 && (
      <div className={styles.container}>
        <div className={styles.currency}>{currency}</div>
        <div className={styles.amount}>{amount}</div>
      </div>
    )) ||
      'Precio no especificado'}
  </div>
);

Price.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.number,
};

Price.defaultProps = {
  currency: 'ARS',
  amount: 0,
};

export default Price;
