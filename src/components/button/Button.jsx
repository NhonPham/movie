import React from "react";
import PropTypes from "prop-types";

import "./button.scss";

const Button = (props) => {
  const { className, onClick, children } = props;
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick ? () => props.onClick() : null}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
