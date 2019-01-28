import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import * as checksActions from '../../actions/checksActions';
import { Button } from "../"
import './Table.css';

class Table extends Component {
  createNewCheck = () => {
    this.props.createCheck(this.props.tableId);
  }

  closeCheck = (checkId) => {
    this.props.closeCheck(checkId);
  }

  renderOpenCheck = () => {
    const openCheck = this.props.openChecks
      .filter(check => this.props.tableId === check.tableId)[0];

    if(openCheck !== undefined) {
      const path = `check/${openCheck.id}`;
      return (
        <div className="table__open-check-container">
          <Link
            to={path}
            className="table__link">View open check
          </Link>
          <Button
            onClick={() => this.closeCheck(openCheck.id)}
            className="table__link">Close check
          </Button>
        </div>
      );
    } else {
      return (
        <Button
          onClick={this.createNewCheck}
          className="table__link">Create new check
        </Button>
      );
    }
  }

  render() {
    return (
      <div className="table">
        <h3 className="table__title">Table {this.props.children}</h3>
        {this.renderOpenCheck()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tables: state.tables,
    checks: state.checks,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(checksActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);