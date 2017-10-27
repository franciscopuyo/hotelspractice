import React from 'react';
import ToggleArrow from 'components/shared/ToggleArrow';
import Icon from 'components/shared/Icon';
import styles from './styles.scss';

class FilterWrapper extends React.Component {
  state = { showContent: true };

  toggleContent = () => this.setState({ showContent: !this.state.showContent });

  render = () => (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.icon}>
          <Icon icon={this.props.icon} />
        </div>
        <div className={styles.titleText}>{this.props.title}</div>
        <div onClick={this.toggleContent} className={styles.toggleButton}>
          <ToggleArrow opened={this.state.showContent} />
        </div>
      </div>
      {this.state.showContent && <div className={styles.content}>{this.props.children}</div>}
    </div>
  );
}

export default FilterWrapper;
