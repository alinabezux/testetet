import axios from "axios";
import {baseURL} from "../configs/urls";

const axiosService = axios.create({baseURL})

// const $authHost = axios.create({
//     baseURL: process.env.REACT_APP_API_URL
// })

// const authInterceptor = config => {
//     config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
//     return config
// }

// $authHost.interceptors.request.use(authInterceptor)

export {
    axiosService,
    // $authHost
}