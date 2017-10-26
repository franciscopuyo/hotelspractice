import React from 'react';
import FilterWrapper from '../../FilterWrapper';
import Button from 'components/shared/Button';
import Input from 'components/shared/Input';
import styles from './styles.scss';

class SingleTextFilter extends React.Component {
  state = { value: '' };

  setValue = e => {
    const value = e.target.value;
    this.setState({ value });
  };

  render = () => (
    <FilterWrapper name={this.props.name} icon={this.props.icon}>
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <Input placeholder={this.props.placeholder} />
        </div>
        <div className={styles.buttonWrapper}>
          <Button text="Aceptar" onClick={this.setValue} />
        </div>
      </div>
    </FilterWrapper>
  );
}

export default SingleTextFilter;
