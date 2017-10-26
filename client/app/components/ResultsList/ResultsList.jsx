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
    </div>
  );
}

ResultsList.defaultProps = {
  results: [
    {
      id: '249942',
      name: 'Hotel Stefanos',
      stars: 3,
      price: 994.18,
      image: '4900059_30_b.jpg',
      amenities: ['safety-box', 'nightclub', 'deep-soaking-bathtub', 'beach', 'business-center'],
    },
  ],
};

export default ResultsList;
