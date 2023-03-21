import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function ModalAddNew(props) {
  const {show, handleClose, handleShow} = props
  

  

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='body-add-new'>
            <div className="mb-3">
              <Label>Name</Label>
              <input type="text" placeholder="Enter email" />
            </div>

            <div className="mb-3" inputId="formBasicEmail">
              <Label>Job</Label>
              <input type="text" placeholder="Enter email" />
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddNew;