import React from 'react';
import PropTypes from 'prop-types';
import CheckboxItem from 'components/shared/CheckboxItem';
import YellowStars from 'components/shared/YellowStars';

class StarCheckboxes extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    quantity: PropTypes.number,
  };

  static defaultProps = {
    quantity: 5,
  };

  state = { value: null };

  onChange = ({ target }) => {
    const { value } = target;
    this.setState({ value });
    this.props.onChange(value);
  };

  getStars = () =>
    new Array(this.props.quantity).fill().map((item, index) => {
      const value = index + 1;
      return (
        <div key={`option-${value}`}>
          <CheckboxItem
            checked={this.isChecked(value)}
            value={value}
            id={`star-${index}`}
            onChange={this.onChange}
          >
            <YellowStars quantity={value} size={16} key={`star-${value}`} />
          </CheckboxItem>
        </div>
      );
    });

  // eslint-disable-next-line eqeqeq
  isChecked = value => this.state.value == value;
  render = () => (
    <div>
      <div key="all">
        <CheckboxItem checked={this.isChecked('')} onChange={this.onChange} value="" id="all">
          Todas las estrellas
        </CheckboxItem>
      </div>
      {this.getStars()}
    </div>
  );
}

export default StarCheckboxes;
