import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdClose } from 'react-icons/md';
import * as checksActions from '../../actions/checksActions';
import { Button, ReceiptItem } from "../"
import './Receipt.css';

class Receipt extends Component {
  renderItems = (check) => {
    if(check !== undefined && check.orderedItems !== undefined) {
      const itemList = check.orderedItems.map((item) => {
        const menuItem = this.props.items.byId[item.itemId];
        return (
          <ReceiptItem
            key={item.id}
            checkClosed={check.closed}
            orderedItem={item}
            menuItem={menuItem}
            voidItemHandler={this.props.voidItemHandler} />
        )
      });

      return <div>{itemList}</div>
    }
    return null;
  }

  renderCloseTicket = (check) => {
    if(!check.closed) {
      return (
        <Button
          onClick={() => this.props.closeCheck(check.id)}
          className="receipt__close-check-link">
          <MdClose className="receipt__close-check-icon" /> Close check
        </Button>
      );
    }
  }

  renderTaxTip = (check) => {
    if(check.closed) {
      return (
        <div>
          <div className="receipt__totals">
            <p className="receipt__name-space"><em>TAX</em></p>
            <p className="receipt__tax">${check.tax.toFixed(2)}</p>
            <p className="receipt__void-space"></p>
          </div>
          <div className="receipt__totals">
            <p className="receipt__name-space"><em>TIP</em></p>
            <p className="receipt__tip">${check.tip.toFixed(2)}</p>
            <p className="receipt__void-space"></p>
          </div>
        </div>
      );
    }
  }
  
  renderReceiptTotal = (check) => {
    if(!check.orderedItems) return;

    let total = 0;
    
    for(let item of check.orderedItems) {
      if(!item.voided) {
        const menuItem = this.props.items.byId[item.itemId];
        total += menuItem.price;
      }
    }

    if(check.closed) {
      total += check.tip + check.tax;
    }

    return (
      <div className="receipt__total-line-item">
        <p className="receipt__name-space"><em>TOTAL</em></p>
        <p className="receipt__total-price">${total.toFixed(2)}</p>
        <p className="receipt__void-space"></p>
      </div>
    )
  }

  render() {
    const check = this.props.checks.byId[this.props.checkId];

    if(check !== undefined) {
      return (
        <div className="receipt">
          {this.renderItems(check)}
          {this.renderTaxTip(check)}
          {this.renderReceiptTotal(check)}
          {this.renderCloseTicket(check)}
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    checks: state.checks,
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(checksActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Receipt);