
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import ModalAddNew from './components/ModalAddNew';
import TableUsers from './components/TableUsers';

function App() {
  return (
    <div className="app-container">
      <Header/>
      <Container>
        <div className='add-new my-3'>
         <span> List Users</span>
          <button className='btn btn-success'>add new User</button>
        </div>
        <TableUsers/>
      </Container>

      <ModalAddNew/>
    </div>
  );
}

export default App;
