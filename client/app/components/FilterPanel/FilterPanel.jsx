import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class FilterPanel extends React.Component {
  static propTypes = {
    filters: PropTypes.arrayOf(PropTypes.node),
  };

  static defaultProps = {
    filters: [],
  };

  render = () => (
    <div className={styles.container}>
      <div className={styles.header}>
        Filtros
      </div>
      <div className={styles.filtersContainer}>
        {this.props.filters}
      </div>
    </div>
  );
}

export default FilterPanel;
