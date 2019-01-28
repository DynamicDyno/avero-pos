import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as checksActions from '../../actions/checksActions';
import { ReceiptItem } from "../"
import './Receipt.css';

class Receipt extends Component {
  componentDidUpdate() {
    console.log('did update receipt');
  }

  renderItems = () => {
    console.log('rendering ordered items');
    if(this.props.check.orderedItems !== undefined) {
      const itemList = this.props.check.orderedItems.map((item) => {
        const menuItem = this.props.items.byId[item.itemId];
        console.log(menuItem);
        return <ReceiptItem key={item.id} item={item} menuItem={menuItem} />
      });

      return <div className="receipt">{itemList}</div>
    }
    return null;
  }

  render() {
    return (
      this.renderItems()
    );
  }
}

function mapStateToProps(state) {
  return {
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