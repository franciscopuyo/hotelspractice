import React from 'react';
import styles from './styles.scss';

class Button extends React.Component {
  render = () => (
    <button className={styles.button} onClick={this.props.onClick}>
      {this.props.text}
    </button>
  );
}

export default Button;