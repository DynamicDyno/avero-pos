import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tablesActions from '../../actions/tablesActions';
import * as checksActions from '../../actions/checksActions';
import { selectOpenChecks } from '../../reducers/rootReducer';
import { Table } from '..';
import './Tables.css';

class Tables extends Component {
  componentDidMount() {
    this.props.fetchTables();
    this.props.fetchChecks();
  }

  renderTables() {
    const tablesHashes = this.props.tables.byId;
    const tablesIds = this.props.tables.allIds;

    const listItems = tablesIds.map((id) =>
      <Table
        key={id}
        tableId={id}
        openChecks={this.props.openChecks}>{tablesHashes[id].number}
      </Table>
    );
    return <div className="tables">{listItems}</div>;
  }

  render() {
    return (
      <div>
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