import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as checksActions from '../../actions/checksActions';
import * as itemsActions from '../../actions/itemsActions';
import { Items, Receipt } from "../"
import './Check.css';

class Check extends Component {
  addItem = (itemId) => {
    this.props.addItemToCheck(itemId, this.props.match.params.checkId);
  }
  voidItem = (orderedItemId) => {
    this.props.voidItem(orderedItemId, this.props.match.params.checkId);
  }

  componentDidMount() {
    this.props.fetchItems();
    this.props.getCheck(this.props.match.params.checkId);
  }

  renderItems = () => {
    const check = this.props.checks.byId[this.props.match.params.checkId];

    if(check !== undefined && !check.closed) {
      return <Items onClick={this.addItem} />
    } else {
      return null;
    }
  }
  
  render() {
    return (
      <div className="check">
        {this.renderItems()}
        
        <Receipt
          checkId={this.props.match.params.checkId}
          voidItemHandler={this.voidItem} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    checks: state.checks,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...checksActions, ...itemsActions}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Check);