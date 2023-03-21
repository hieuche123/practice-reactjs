const fetchAllUser = () => {
    axios.get('https://reqres.in/api/users?page=1').then(data => {
            console.log("data", data.data.data)
        })
}

export {fetchAllUser};