import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';
import { MdClose, MdEdit } from 'react-icons/md';
import * as checksActions from '../../actions/checksActions';
import { selectOpenChecks } from '../../reducers/rootReducer';
import { Button } from "../"
import './Table.css';

class Table extends Component {

  createNewCheck = () => {
    this.props.createCheck(this.props.tableId);
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
            className="table__link"><MdEdit className="table__icon" />
          </Link>
          <Button
            onClick={() => this.props.closeCheck(openCheck.id)}
            className="table__link"><MdClose className="table__icon" />
          </Button>
        </div>
      );
    } else {
      return (
        <Button
          onClick={() => this.props.onClickOpenCheck(this.props.tableId)}
          className="table__link"><FaPlus className="table__icon" />
        </Button>
      );
    }
  }

  render() {
    return (
      <div className="table">
        <h2 className="table__title">Table {this.props.children}</h2>
        {this.renderOpenCheck()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tables: state.tables,
    checks: state.checks,
    openChecks: selectOpenChecks(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(checksActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);