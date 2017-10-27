import React from 'react';
import Result from './Result';
import styles from './styles.scss';

class ResultsList extends React.Component {
  render = () => (
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
      {this.props.status === 'LOADING' && 'Buscando resultados...'}
      {this.props.status === 'ERROR' && 'Hubo un problema! Intentá mas tarde'}
      {!this.props.results.length &&
        this.props.status === 'SUCCESS' &&
        'No encontramos ningun resultado! Seguí buscando'}
    </div>
  );
}

ResultsList.defaultProps = {
  results: [],
};

export default ResultsList;
