import React from 'react';
import FilterWrapper from '../../FilterWrapper';
import StarCheckboxes from './StarCheckboxes.jsx';
import styles from './styles.scss';

class SingleTextFilter extends React.Component {
  render = () => (
    <FilterWrapper name={this.props.name} icon={this.props.icon}>
      <div className={styles.container}>
        <StarCheckboxes onChange={this.props.onChange} quantity={this.props.quantity} />
      </div>
    </FilterWrapper>
  );
}

export default SingleTextFilter;
