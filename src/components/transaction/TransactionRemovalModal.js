import { Modal } from "react-bootstrap";
import { ButtonPrimary, ButtonSecondary } from "../buttons/Button";

export default function TransactionRemovalModal({ onHide, onRemove, ...rest }) {
  return (
    <Modal
      {...rest}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete transaction
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete this transaction?</p>
      </Modal.Body>
      <Modal.Footer>
        <ButtonPrimary onClick={onHide}>Cancel</ButtonPrimary>
        <ButtonSecondary onClick={onRemove}>Delete transaction</ButtonSecondary>
      </Modal.Footer>
    </Modal>
  );
}
