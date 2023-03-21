import axios from './CustomizeAxios';

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`)
}

const postCreateUser = (name, job) => {
    return axios.post(`/api/users?page=${page}`,{name: name, job: job})
}



export {fetchAllUser};