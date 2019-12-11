import React from 'react';

/*------------------------------------*\
  $ CSS
\*------------------------------------*/
import '../css/App.css';

/*------------------------------------*\
  $ CONSTANT
\*------------------------------------*/
import { panier } from '../constants/panier'

/*------------------------------------*\
  $ PACKAGE
\*------------------------------------*/
import PropTypes from 'prop-types'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      afficher: false
    }

    this.elemRef = React.createRef();

    this.panier = panier;
  }

  componentDidUpdate() {
    const bouton = this.elemRef.current

    if (this.state.afficher === false) {
      bouton.textContent = 'Afficher le panier'
    } else {
      bouton.textContent = 'Masquer le panier'
    }
  }

  afficher = () => {
    this.setState({
      afficher: !this.state.afficher
    })
  }

  render() {

    console.log('render');

    const elem = Object.keys(this.panier).map(id => 
    <Article key={id} info={this.panier[id]}>
      Test
    </Article>);
    return (
      <div>
        <button ref={this.elemRef} onClick={this.afficher}>Afficher le panier</button>
        
        {this.state.afficher === true && 
          <div className="articles">
            {elem}
          </div>
        }



      </div>
    );
  }
}

const Article = (props) => {
  return (
    <div className="article">
      <img alt={props.info.nom} src={props.info.image} />
      <div>{props.info.nom}</div>
      <div>Prix: {props.info.prix} €</div>
      <div>Quantité: {props.info.quantite}</div>
      <div>{props.children}</div> 
    </div>
  )
}

export default App;
