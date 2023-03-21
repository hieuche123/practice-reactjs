import axios from './CustomizeAxios';

const fetchAllUser = (page) => {
    return axios.get('/api/users?page=1')
}



export {fetchAllUser};