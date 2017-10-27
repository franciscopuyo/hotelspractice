import React from 'react';
import FilterWrapper from '../../FilterWrapper';
import StarCheckboxes from './StarCheckboxes.jsx';
import styles from './styles.scss';

class SingleTextFilter extends React.Component {
  onChange = (value) => this.props.setFilterValue(this.props.name, value);

  render = () => (
    <FilterWrapper title={this.props.title} icon={this.props.icon}>
      <div className={styles.container}>
        <StarCheckboxes onChange={this.onChange} quantity={this.props.quantity} />
      </div>
    </FilterWrapper>
  );
}

export default SingleTextFilter;
