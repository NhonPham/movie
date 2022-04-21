import { useRef } from "react";
import PropTypes from "prop-types";

const ModalContent = (props) => {
  const { onClose } = props;

  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (onClose) props.onClose();
  };
  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  onClose: PropTypes.func,
};
export default ModalContent;
