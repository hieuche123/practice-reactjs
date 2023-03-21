import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { postCreateUser } from '../sevices/UserSevice';
function ModalAddNew(props) {
  const {show, handleClose, handleUpdateTable} = props
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSaveUser = async() => {
    let res = await postCreateUser(name, job)

    if(res && res.id) {
      //success
      handleClose();
      setName('');
      setJob('');
      handleUpdateTable({
        first_name: name,
        id: res.id
      })
      toast.success("a user is created success!");
      
    }else {

    }
  }
  

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='body-add-new'>
            <div className="mb-3">
              <label className='form-lable'>Name</label>
              <input  className='form-control' type="text"value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter email" />
            </div>

            <div className="mb-3">
              <label className='form-lable'>Job</label>
              <input className='form-control' type="text"value={job} onChange={(e)=>{setJob(e.target.value)}} placeholder="Enter email" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {handleSaveUser()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddNew;