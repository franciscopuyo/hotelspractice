import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/shared/Button';
import Input from 'components/shared/Input';
import FilterWrapper from '../../FilterWrapper';
import styles from './styles.scss';

class SingleTextFilter extends React.Component {
  static propTypes = {
    setFilterValue: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    placeholder: '',
  };

  state = { value: '' };

  onPressButton = () => this.props.setFilterValue(this.props.name, this.state.value);

  setInputValue = e => this.setState({ value: e.target.value });

  render = () => (
    <FilterWrapper title={this.props.title} icon={this.props.icon}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <Input
            onChange={this.setInputValue}
            value={this.state.value}
            placeholder={this.props.placeholder}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button text="Aceptar" onClick={this.onPressButton} />
        </div>
      </div>
    </FilterWrapper>
  );
}

export default SingleTextFilter;
