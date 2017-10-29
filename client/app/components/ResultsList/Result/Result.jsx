import React from 'react';
import PropTypes from 'prop-types';
import YellowStars from 'components/shared/YellowStars';
import Icon from 'components/shared/Icon';
import Button from 'components/shared/Button';
import Price from 'components/shared/Price';
import styles from './styles.scss';

class Result extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
    amenities: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    image: '',
    name: 'Nombre desconocido',
    amenities: [],
    price: 0,
    rating: 0,
  };

  render = () => (
    <div className={styles.container}>
      <div className={styles.image}>
        <img alt={this.props.name} src={this.props.image} />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>{this.props.name}</div>
        <div className={styles.starsContainer}>
          <YellowStars quantity={this.props.rating} size={16} />
        </div>
        <div className={styles.amenities}>
          {this.props.amenities.map(item => (
            <span key={item} className={styles.icon}>
              <Icon icon={item} fill="black" />
            </span>
          ))}
        </div>
      </div>
      <div className={styles.price}>
        <span className={styles.priceDescription}>Precio por noche por habitacion</span>
        <Price amount={this.props.price} />
        <Button className={styles.button} text="Ver hotel" />
      </div>
    </div>
  );
}

export default Result;
