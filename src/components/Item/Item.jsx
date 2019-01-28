import React, { Component } from 'react';
import { Button } from '../';
import './Item.css';

export default class Item extends Component {
  render() {
    return (
      <Button onClick={this.props.onClick} id={this.props.item.id} href="#" className="item">
        <p className="item__name">{this.props.item.name}</p>
        <p className="item__price">${this.props.item.price}</p>
      </Button>
    );
  }
}