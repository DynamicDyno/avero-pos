import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onClick(this.props.id)}
        className={this.props.className + ' button'}>{this.props.children}
      </button>
    )
  }
}

export default Button;
