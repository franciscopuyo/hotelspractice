import React from 'react';
import styles from './styles.scss';

class ToggleArrow extends React.Component {
  render = () => (
    <div className={styles.container}>
      <div className={`${styles.arrow} ${this.props.opened ? styles.opened : styles.closed}`} />
    </div>
  );
}

export default ToggleArrow;
