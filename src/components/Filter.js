import React from "react";
import FilterLink from "./FilterLink";

/**
 * @description The filter container
 * @returns {React.FunctionComponent}
 */
const Filter = () => {
  return (
    <p>
      Show: <FilterLink filter="SHOW_ALL">All</FilterLink>{" "}
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>{" "}
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
  );
};

export default Filter;
