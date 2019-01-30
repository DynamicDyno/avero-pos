import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdCancel } from 'react-icons/md';
import * as checksActions from '../../actions/checksActions';
import { Button } from "../"
import './ReceiptItem.css';

class ReceiptItem extends Component {
  renderVoidButton = () => {
    if(!this.props.orderedItem.voided && !this.props.checkClosed) {
      return (
        <div className="receipt-item__void">
          <Button
            className="receipt-item__void-item"
            onClick={() => this.props.voidItemHandler(this.props.orderedItem.id)}>
            <MdCancel />
          </Button>
        </div>
      );
    } else {
      return <div className="receipt-item__void"></div>
    }
  }

  render() {
    return (
      <div className="receipt-item">
        <p
          className={(this.props.orderedItem.voided)
            ? "receipt-item__name receipt-item__name--voided"
            : "receipt-item__name"}>
          {this.props.menuItem.name}
        </p>
        <p className={(this.props.orderedItem.voided)
          ? "receipt-item__price receipt-item__price--voided"
          : "receipt-item__price"}>
          ${this.props.menuItem.price.toFixed(2)}</p>
        {this.renderVoidButton()}
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