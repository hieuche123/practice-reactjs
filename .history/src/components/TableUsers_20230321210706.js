import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {fetchAllUser} from '../sevices/UserSevice'
import ReactPaginate from 'react-paginate';
function TableUsers(props) {
    const [listUsers, setListUsers] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=> {
        getUsers();
    },[])

    const getUsers = async() => {
        let res = await fetchAllUser();
        if(res && res.data) {
            setListUsers(res.data)
        }
        console.log(res)
    }

    const handlePageClick = (event) => {
        // const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //   `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        // setItemOffset(newOffset);
      };
    
    return (  
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
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
                pageCount={6}
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


        </>
    );
}

export default TableUsers;