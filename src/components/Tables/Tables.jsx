import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as tablesActions from '../../actions/tablesActions';
import * as checksActions from '../../actions/checksActions';
import { selectOpenChecks } from '../../reducers/rootReducer';
import { Table } from '..';
import './Tables.css';

class Tables extends Component {
  state = {
    redirectToTable: null,
  }

  componentDidMount() {
    this.props.fetchTables();
    this.props.fetchChecks();
  }

  // after a check is opened and the API returns the id, redirect to its page
  openCheck = (tableId) => {
    this.setState({ redirectToTable: tableId });
    this.props.createCheck(tableId);
  }

  renderRedirect() {
    if(this.state.redirectToTable !== null) {
      for(let check of this.props.openChecks) {
        if(check.tableId === this.state.redirectToTable) {
          const path = `/check/${check.id}`;
          return <Redirect to={path} />
        }
      }
    }
  }

  renderTables() {
    const tablesHashes = this.props.tables.byId;
    const tablesIds = this.props.tables.allIds;

    const listItems = tablesIds.map((id) =>
      <Table
        key={id}
        tableId={id}
        openChecks={this.props.openChecks}
        onClickOpenCheck={this.openCheck}>{tablesHashes[id].number}
      </Table>
    );
    return <div className="tables">{listItems}</div>;
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        {this.renderTables()}
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
  return bindActionCreators({ ...tablesActions, ...checksActions}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tables);