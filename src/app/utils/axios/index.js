import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3050/api'
})

export default axiosInstance;