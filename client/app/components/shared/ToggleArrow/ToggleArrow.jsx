import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class ToggleArrow extends React.Component {
  static propTypes = {
    opened: PropTypes.bool,
  };

  static defaultProps = {
    opened: false,
  };

  render = () => (
    <div className={styles.container}>
      <div className={`${styles.arrow} ${this.props.opened ? styles.opened : styles.closed}`} />
    </div>
  );
}

export default ToggleArrow;
