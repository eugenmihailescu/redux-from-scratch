import React from "react";
import PropTypes from "prop-types";

export const Alert = ({ children }, { store }) => {
  return (
    <div className="alert shadow">
      <span>{children}</span>
    </div>
  );
};
Alert.contextTypes = {
  store: PropTypes.object
};
