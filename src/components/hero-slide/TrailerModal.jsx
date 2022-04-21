import { useRef } from "react";
import "./heroSlide.scss";
import Modal from "../modal/Modal";
import ModalContent from "../modal/ModalContent";

const TrailerModal = (props) => {
  const { id } = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default TrailerModal;
