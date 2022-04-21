import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import "./button.scss";
const OutlineButton = (props) => {
  const { onClick, className, children } = props;
  return (
    <Button
      className={`btn-outline ${className}`}
      onClick={onClick ? () => props.onClick() : null}
    >
      {children}
    </Button>
  );
};

OutlineButton.propTypes = {
  onClick: PropTypes.func,
};

export default OutlineButton;
