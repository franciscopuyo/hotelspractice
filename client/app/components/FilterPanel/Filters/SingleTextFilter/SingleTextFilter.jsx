import React from 'react';
import FilterWrapper from '../../FilterWrapper';
import Button from 'components/shared/Button';
import Input from 'components/shared/Input';
import styles from './styles.scss';

class SingleTextFilter extends React.Component {
  state = { value: '' };

  setInputValue = e => this.setState({ value: e.target.value });

  onPressButton = () => {
    this.props.setFilterValue(this.props.name, this.state.value);
  };

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
