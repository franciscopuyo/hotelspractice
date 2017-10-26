import React from 'react';
import CheckboxItem from 'components/shared/CheckboxItem';
import YellowStars from 'components/shared/YellowStars';

class StarCheckboxes extends React.Component {
  state = { value: null };

  isChecked = value => this.state.value == value;
  onChange = ({ target }) => this.setState({ value: target.value });

  getStars = () =>
    new Array(this.props.quantity).fill().map((item, index) => {
      const value = index + 1;
      return (
        <div key={index}>
          <CheckboxItem
            checked={this.isChecked(value)}
            value={value}
            id={`star-${index}`}
            onChange={this.onChange}
          >
            <YellowStars quantity={value} size={16} key={index} />
          </CheckboxItem>
        </div>
      );
    });

  render = () => (
    <div>
      <div key="all">
        <CheckboxItem checked={this.isChecked('all')} onChange={this.onChange} value="all" id="all">
          Todas las estrellas
        </CheckboxItem>
      </div>
      {this.getStars()}
    </div>
  );
}

export default StarCheckboxes;
