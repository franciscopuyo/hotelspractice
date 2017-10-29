import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';
import styles from './styles.scss';

class ResultsList extends React.Component {
  static propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      amenities: PropTypes.arrayOf(PropTypes.string),
      price: PropTypes.number,
    })),
    status: PropTypes.string,
  };

  static defaultProps = {
    results: [],
    status: '',
  };

  render = () => {
    if (this.props.status === 'LOADING') return 'Buscando resultados...';
    if (this.props.status === 'ERROR') return 'Hubo un problema! Intentá mas tarde';
    if (this.props.status === 'SUCCESS' && !this.props.results.length) return 'No hay resultados para tu búsqueda';
    if (this.props.status === '') return 'Realiza una búsqueda utilizando los filtros';
    return (
      <div className={styles.container}>
        {this.props.results.map(result => (
          <Result
            key={result.name}
            name={result.name}
            image={result.image}
            rating={result.stars}
            amenities={result.amenities}
            price={result.price}
          />
        ))}
      </div>
    );
  }
}

export default ResultsList;
