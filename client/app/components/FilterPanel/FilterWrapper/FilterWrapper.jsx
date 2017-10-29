import React from 'react';
import PropTypes from 'prop-types';
import ToggleArrow from 'components/shared/ToggleArrow';
import Icon from 'components/shared/Icon';
import styles from './styles.scss';

class FilterWrapper extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  state = { showContent: true };

  toggleContent = () => this.setState({ showContent: !this.state.showContent });

  render = () => (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.icon}>
          <Icon icon={this.props.icon} />
        </div>
        <div className={styles.titleText}>{this.props.title}</div>
        <button onClick={this.toggleContent} className={styles.toggleButton}>
          <ToggleArrow opened={this.state.showContent} />
        </button>
      </div>
      {this.state.showContent && <div className={styles.content}>{this.props.children}</div>}
    </div>
  );
}

export default FilterWrapper;
