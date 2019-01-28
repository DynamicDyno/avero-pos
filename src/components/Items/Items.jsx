import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as itemsActions from '../../actions/itemsActions';
import { Item } from '../'
import './Items.css';

class Items extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  renderItems() {
    const itemsHashes = this.props.items.byId;
    const itemsIds = this.props.items.allIds;

    const listItems = itemsIds.map((id) => {
      return <Item onClick={this.props.onClick} key={id} item={itemsHashes[id]} />
    });

    return listItems;
  }

  render() {
    return (
      <div className="items">
        {this.renderItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(itemsActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items);