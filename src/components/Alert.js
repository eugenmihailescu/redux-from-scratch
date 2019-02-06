import React from "react";
import PropTypes from 'prop-types'

export const Alert = ({ children, onHide, timeout }, { store }) => {
  setTimeout(onHide, timeout);

  return (
    <div className="alert shadow">
      <span>{children}</span>
    </div>
  );
};
Alert.contextTypes = {
  store: PropTypes.object
};