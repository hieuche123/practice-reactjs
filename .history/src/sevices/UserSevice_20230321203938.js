import axios from 'axios';

const fetchAllUser = () => {
    return axios.get('users?page=1')
}

export {fetchAllUser};