import React from 'react';
import styles from './styles.scss';

class CheckboxItem extends React.Component {
  render = () => {
    return (
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
  };
}

export default CheckboxItem;
