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
        if(res && res.data) {
            setListUsers(res.data)
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


        </>
    );
}

export default TableUsers;