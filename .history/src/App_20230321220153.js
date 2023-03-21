
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import ModalAddNew from './components/ModalAddNew';
import TableUsers from './components/TableUsers';

function App() {
  const [showModalAddNew, setShowModalAddNew] = useState(false);
  const handleClose = () => setShowModalAddNew(false);
  const handleShow = () => setShowModalAddNew(true);
  return (
    <div className="app-container">
      <Header/>
      <Container>
        <div className='add-new my-3'>
         <span> List Users</span>
          <button className='btn btn-success' onClick={handleShow}>add new User</button>
        </div>
        <TableUsers/>
      </Container>

      <ModalAddNew 
        show={showModalAddNew}
        handleClose={handleClose}
        handleShow={handleShow}

      />
    </div>
  );
}

export default App;
