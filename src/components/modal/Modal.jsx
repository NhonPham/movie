import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./modal.scss";
const Modal = (props) => {
  const { active, id, children } = props;

  const [activee, setActivee] = useState(false);

  useEffect(() => {
    setActivee(active);
  }, [active]);

  return (
    <div id={id} className={`modal ${activee ? "active" : ""}`}>
      {children}
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

export default Modal;
