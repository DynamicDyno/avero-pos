import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as checksActions from '../../actions/checksActions';
import { Button } from "../"
import './ReceiptItem.css';

class ReceiptItem extends Component {
  render() {
    return (
      <div className="receipt-item">
        <p className="receipt-item__name">{this.props.menuItem.name}</p>
        <Button className="receipt-item__void-item">Void</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(checksActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReceiptItem);