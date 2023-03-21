import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import { ToastContainer } from 'react-toastify';

function App() {
  
  const handleShow = () => setShowModalAddNew(true);
  return (
    <>
      <div className="app-container">
        <Header/>
        <Container>
          <div className='add-new my-3'>
           <span> List Users</span>
            <button className='btn btn-success' onClick={handleShow}>add new User</button>
          </div>
          <TableUsers/>
        </Container>
  
        
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
