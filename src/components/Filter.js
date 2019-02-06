import PropTypes from "prop-types";
import React from "react";
import { FilterLink } from "./FilterLink";

export const Filter = ({ currentFilter }, { store }) => {
  return (
    <p>
      Show:{" "}
      <FilterLink currentFilter={currentFilter} filter="SHOW_ALL">
        All
      </FilterLink>{" "}
      <FilterLink currentFilter={currentFilter} filter="SHOW_ACTIVE">
        Active
      </FilterLink>{" "}
      <FilterLink currentFilter={currentFilter} filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </p>
  );
};
Filter.contextTypes = {
  store: PropTypes.object
};
