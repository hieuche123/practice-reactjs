import axios from './CustomizeAxios';

const fetchAllUser = () => {
    return axios.get('/users?page=1')
}



export {fetchAllUser};