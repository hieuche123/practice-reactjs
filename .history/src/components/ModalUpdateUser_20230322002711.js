import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { postCreateUser } from '../sevices/UserSevice';
function ModalUpdateUser(props) {
  const {show, handleClose, handleUpdateTable,dataUsers} = props
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleEditUser = async() => {
    let res = await postCreateUser(name, job)

    // if(res && res.id) {
    //   //success
    //   handleClose();
    //   setName('');
    //   setJob('');
    //   handleUpdateTable({
    //     first_name: name,
    //     id: res.id
    //   })
    //   toast.success("a user is created success!");
      
    // }else {

    // }
  }

  useEffect(()=> {
    if(show)
  },[dataUsers])
  

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit user</Modal.Title>
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
          <Button variant="primary" onClick={()=> {handleEditUser()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateUser;