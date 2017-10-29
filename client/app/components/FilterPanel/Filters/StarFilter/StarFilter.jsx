import React from 'react';
import PropTypes from 'prop-types';
import FilterWrapper from '../../FilterWrapper';
import StarCheckboxes from './StarCheckboxes';
import styles from './styles.scss';

class SingleTextFilter extends React.Component {
  static propTypes = {
    setFilterValue: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    quantity: PropTypes.number,
  };

  static defaultProps = {
    quantity: 5,
    icon: 'Star',
    title: 'Estrellas',
  };

  onChange = value => this.props.setFilterValue(this.props.name, value);

  render = () => (
    <FilterWrapper title={this.props.title} icon={this.props.icon}>
      <div className={styles.container}>
        <StarCheckboxes onChange={this.onChange} quantity={this.props.quantity} />
      </div>
    </FilterWrapper>
  );
}

export default SingleTextFilter;
