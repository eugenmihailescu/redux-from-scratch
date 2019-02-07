import React from "react";
import { connect } from "react-redux";
import { getSetFilterAction } from "../actions/creators";

/**
 * @description A filter link component
 * @param {Object} { filter, currentFilter, children, applyFilter }
 * @returns {React.FunctionComponent}
 */
const FilterLink = ({ filter, currentFilter, children, applyFilter }) => {
  return (
    <button
      className={filter === currentFilter ? "active" : null}
      onClick={() => applyFilter(filter)}
    >
      {children}
    </button>
  );
};

/***************************************************
 * Connect the FilterLink component to the Redux store
 **************************************************/

/**
 * @description Map the store's state to the FilterLink props
 * @param {Object} state
 * @returns {Object}
 */
const mapStateToProps = state => {
  return {
    currentFilter: state.filter
  };
};

/**
 * @description Map the store's dispatcher to the FilterLink props
 * @param {*} dispatch
 * @returns
 */
const mapDispatchToProps = dispatch => {
  return {
    applyFilter: filter => dispatch(getSetFilterAction(filter))
  };
};

// export as Rect.Component the Provider wrapped around the FilterLink component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
