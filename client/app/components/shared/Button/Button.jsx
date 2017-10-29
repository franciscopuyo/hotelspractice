import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Button extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: styles.button,
    onClick: () => true,
  };

  render = () => (
    <button className={this.props.className} onClick={this.props.onClick}>
      {this.props.text}
    </button>
  );
}

export default Button;
