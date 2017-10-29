import React from 'react';
import styles from './styles.scss';

class Input extends React.Component {
  render = () => (
    <input {...this.props} className={styles.input} />
  )
}

export default Input;
