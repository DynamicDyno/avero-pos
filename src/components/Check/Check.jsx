import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as checkActions from '../../actions/checkActions';
import { Items, Receipt } from "../"
import './Check.css';

class Check extends Component {
  addItem = (itemId) => {
    this.props.addItemToCheck(itemId, this.props.check.id);
  }

  componentDidMount() {
    this.props.getCheck(this.props.match.params.checkId);
  }

  componentDidUpdate() {
    console.log('did update check');
  }

  render() {
    return (
      <div className="check">
        <Items onClick={this.addItem} />
        <Receipt check={this.props.check} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    check: state.check,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(checkActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Check);