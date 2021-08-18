import { useEffect } from "react";
import { useRef, useState } from "react";

import { Modal, Spinner } from "react-bootstrap";

import styles from "./Suscription.module.scss";

type SuscriptionModalProps = {
  targetName: string;
  show: boolean;
  onClose: Function;
};

export default function SuscriptionModal({
  targetName,
  show,
  onClose,
}: SuscriptionModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loaded, hasLoaded] = useState(false);

  useEffect(() => {
    hasLoaded(false);
  }, [show]);

  const handleLoad = () => {
    hasLoaded(true);
    setTimeout(() => onClose(), 4000);
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      dialogClassName="suscription-modal"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Suscripción</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          ref={iframeRef}
          name={targetName}
          className="w-100 h-100 mx-auto"
          frameBorder="0"
          onLoad={handleLoad}
        ></iframe>
        {!loaded && (
          <div className={styles.suscriptionModalLoader}>
            <Spinner className="mx-2" animation="grow" />
            <Spinner className="mx-2" animation="grow" />
            <Spinner className="mx-2" animation="grow" />
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}
