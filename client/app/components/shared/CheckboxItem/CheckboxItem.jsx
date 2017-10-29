import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class CheckboxItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node),
  };

  static defaultProps = {
    name: 'checkbox',
    value: 'on',
    children: [],
  };

  render = () => (
    <div className={styles.container}>
      <label htmlFor={this.props.id}>
        <input
          onChange={this.props.onChange}
          checked={this.props.checked}
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          type="checkbox"
        />
        <span className={styles.content}>{this.props.children}</span>
      </label>
    </div>
  );
}

export default CheckboxItem;
