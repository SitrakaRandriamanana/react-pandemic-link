import { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  
 

  render(){
    return (
        <header>
        <nav>
          <div id="logo">
              <h1>E-Pandemic</h1>
          </div>
          <div id="menu">
              <ul>
                <li><NavLink activeClassName="active" exact to="/" >accueil</NavLink></li>
                <li><NavLink activeClassName="active" to="/components" >actualites</NavLink></li>
              </ul>
          </div>
          <div id="connection" className="btn">
              <button>s'inscrire</button>
              <button className="active">se connecter</button>
          </div>
        </nav>
        <div className="recherche">
          <h1>Bienvenue sur e-pandemic link</h1>
          <p>RANDRIAMANANA Mamitina Sitraka Dimbiniaina IMTICIA5</p>
          <form className="flex">
            <input type="text" />
            <button className="active">Rechercher</button>
          </form>
        </div>
      </header>
    );
  }
}

export default Header;


