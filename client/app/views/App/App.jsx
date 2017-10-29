import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
  };

  static defaultProps = {
    children: [],
  };

  render = () => (
    <div>
      <div className={styles.headerContainer}>
        <div className="container">
          <div className={`cols-md-12 ${styles.header}`}>
            <img alt="Logo al mundo" src="assets/images/logo-almundo.svg" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12">{this.props.children}</div>
      </div>
    </div>
  );
}

export default App;
