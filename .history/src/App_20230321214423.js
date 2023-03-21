
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
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
    </div>
  );
}

export default App;
