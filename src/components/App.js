import React from 'react';

// CSS
import '../css/App.css';

// CONSTANT
import { panier } from '../constants/panier'

// PACKAGE
import PropTypes from 'prop-types'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      afficher: false
    }

    this.panier = panier;
  }

  render() {

    const elem = Object.keys(this.panier).map(id => <div>{id}</div>);
    

    return (
      <div>
        <button>Afficher le panier</button>
        
        <div>
          {elem}
        </div>




      </div>
    );
  }
}

export default App;
