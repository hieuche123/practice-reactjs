import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import {fetchAllUser} from '../sevices/UserSevice'

function TableUsers(props) {
    const [listUsers, setListUsers] = useState([]);
    useEffect(()=> {
        getUsers();
    },[])

    const getUsers = async() => {
        let res = await fetchAllUser();
        if(res && res.data && res.data.data) {
            setListUsers(res.data.data)
        }
        console.log(res)
    }
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
                                <tr>
                                    <th>{item.id}</th>
                                    <th>Email</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                </tr>
                            )
                        })
                    
                    }
                </tbody>
            </Table>


        </>
    );
}

export default TableUsers;