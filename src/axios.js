import axios from 'axios'

const instance = axios.create({
    baseURL:"https://mern-blog-zedan.herokuapp.com/api/",
})

export default instance;