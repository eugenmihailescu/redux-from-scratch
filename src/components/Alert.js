import React from "react";

/**
 * @description An generic alert box
 * @param {Object} { children }
 * @returns {React.FunctionComponent}
 */
const Alert = ({ children }) => {
  return (
    <div className="alert shadow">
      <span>{children}</span>
    </div>
  );
};

export default Alert;
