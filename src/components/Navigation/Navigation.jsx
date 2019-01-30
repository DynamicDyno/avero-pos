import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { MdClose } from 'react-icons/md';
import { Button } from "../"
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className={this.props.isOpen ? 'nav nav--open' : 'nav nav--closed'} >
        <Button onClick={this.props.toggleMenu} className="nav__close-button"><MdClose /></Button>
        <ul className="nav__list">
          <li className="nav__li">
            <Link to="/" onClick={this.props.toggleMenu} className="nav__link">Tables</Link>
          </li>
          <li className="nav__li">
            <Link to="/checks" onClick={this.props.toggleMenu} className="nav__link">Checks</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
