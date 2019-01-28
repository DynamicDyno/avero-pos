import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Button } from '../';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__menu-space">
          <Button onClick={this.props.toggleMenu} className="header__menu-button">Menu</Button>
        </div>
        <Route exact={true} path='/' render={() => <h2 className="header__title">Tables</h2>}/>
        <Route path='/checks' render={() => <h2 className="header__title">Checks</h2>}/>
        <Route path='/check/' render={() => <h2 className="header__title">Check</h2>}/>
        <div className="header__right-space"></div>
      </header>
    );
  }
}

export default Header;
