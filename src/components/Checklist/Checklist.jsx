import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import * as checksActions from '../../actions/checksActions';
import * as tablesActions from '../../actions/tablesActions';
import { filterOpenChecks, filterClosedChecks } from '../../reducers/rootReducer';
import { Button } from '..';
import './Checklist.css';

class Checklist extends Component {
  state = {
    filterChecks: 'Open',
  }

  componentDidMount() {
    this.props.fetchTables();
    this.props.fetchChecks();
  }

  formatDate = (date) => {
    const createdAt = new Date(date);
    return createdAt.toLocaleString("en-US");
  }

  renderFilterButton(filter) {
    if(this.state.filterChecks === filter) {
      return <span className="checklist__selected-filter">{filter}</span>;
    }

    return (
      <Button
        onClick={() => this.updateFilter(filter)}
        className="checklist__filter-button">{filter}</Button>
    );
  }

  updateFilter(filter) {
    this.setState({filterChecks: filter});
  }

  getTableNumber = (tableId) => {
    if(this.props.tables.byId[tableId] === undefined) return null;
    
    return this.props.tables.byId[tableId].number;
  }

  renderChecks = () => {
    let checksIds;
    
    if(this.state.filterChecks === 'Open') {
      checksIds = this.props.openChecks;
    } else if(this.state.filterChecks === 'Closed') {
      checksIds = this.props.closedChecks;
    } else {
      checksIds = this.props.checks.allIds;
    }
    
    if(checksIds === undefined) return null;

    const listItems = checksIds.map((id) =>
      <div className="checklist__check" key={id}>
        <h3 className="checklist__check-title">Table #{this.getTableNumber(this.props.checks.byId[id].tableId)}</h3>
        <p className="checklist__check-created-date">Created on: {this.formatDate(this.props.checks.byId[id].dateCreated)}</p>
        <Link
            to={`check/${id}`}
            className="checklist__link">View check
          </Link>
      </div>
    );
    return listItems
  }

  render() {
    return (
      <div className="checklist">
        <div className="checklist__filter-links">
          {this.renderFilterButton('Open')}
          {this.renderFilterButton('Closed')}
          {this.renderFilterButton('All')}
        </div>
        <div className="checklist__list">
          {this.renderChecks()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tables: state.tables,
    checks: state.checks,
    openChecks: filterOpenChecks(state),
    closedChecks: filterClosedChecks(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...tablesActions, ...checksActions}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checklist);