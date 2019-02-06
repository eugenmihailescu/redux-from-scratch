import PropTypes from "prop-types";
import React, { Component } from "react";

export class FilterLink extends Component {
  handleFilterClick(filter) {
    this.context.store.dispatch({
      type: "SET_VISIBILITY_FILTER",
      filter
    });
  }

  render() {
    let filter = this.props.filter;
    return (
      <button
        className={filter === this.props.currentFilter ? "active" : null}
        onClick={this.handleFilterClick.bind(this, filter)}
      >
        {this.props.children}
      </button>
    );
  }
}

FilterLink.contextTypes = {
  store: PropTypes.object
};
