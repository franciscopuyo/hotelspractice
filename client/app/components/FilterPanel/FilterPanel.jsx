import React from 'react';
import styles from './styles.scss';

class FilterPanel extends React.Component {
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