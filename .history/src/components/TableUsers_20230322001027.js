import axios from 'axios';
import { useEffect, useState } from 'react';
import ModalAddNew from './ModalAddNew';
import ModalUpdateUser from './ModalUpdateUser';
import Table from 'react-bootstrap/Table';
import {fetchAllUser} from '../sevices/UserSevice'
import ReactPaginate from 'react-paginate';
import { Button } from 'react-bootstrap';
function TableUsers(props) {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [showModalAddNew, setShowModalAddNew] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const handleClose = () => setShowModalAddNew(false);
    const handleShow = () => setShowModalAddNew(true);

    useEffect(()=> {
        getUsers(1);
    },[])

    const getUsers = async(page) => {
        let res = await fetchAllUser(page);
        if(res && res.data) {
            setListUsers(res.data);
            setTotalUsers(res.total);
            setTotalPages(res.total_pages);
            console.log(res.data)
        }
        console.log(res)
    }

    const handleUpdateTable = (user) => {
        setListUsers([user,...listUsers])
    }

    const handlePageClick = (event) => {
        getUsers(+event.selected + 1);

    };
    
    return (  
        <>
            <div className='add-new my-3'>
                <span> List Users</span>
                <button className='btn btn-success' onClick={handleShow}>add new User</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && 
                        listUsers.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <th>{item.email}</th>
                                    <th>{item.first_name}</th>
                                    <th>{item.last_name}</th>
                                    <th>
                                        <Button className='mx-3 btn-primary' onClick={handleEditUser(item)}>Edit</Button>
                                        <Button className='btn-warning'>Delete</Button>
                                    </th>
                                </tr>
                            )
                        })
                    
                    }
                </tbody>
            </Table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"

                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName='pagination'
                activeClassName='active'
            />

            <ModalAddNew 
                show={showModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            />
            <ModalUpdateUser
                show={showModalEdit}
            />


        </>
    );
}

export default TableUsers;