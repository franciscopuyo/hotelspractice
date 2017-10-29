import React from 'react';
import YellowStars from 'components/shared/YellowStars';
import Icon from 'components/shared/Icon';
import Button from 'components/shared/Button';
import Price from 'components/shared/Price';
import styles from './styles.scss';

class Result extends React.Component {
  render = () => (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={this.props.image} />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>{this.props.name}</div>
        <div className={styles.starsContainer}>
          <YellowStars quantity={this.props.rating} size={16} />
        </div>
        <div className={styles.amenities}>
          {this.props.amenities.map((item, index) => (
            <span key={index} className={styles.icon}>
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

Result.defaultProps = {
  amenities: [],
};

export default Result;
