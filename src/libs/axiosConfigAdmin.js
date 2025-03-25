import axios from "axios"

export const baseUrl1 ='https://www.urbanwrk.com/cms'


const axiosInstance = axios.create({
    baseURL: baseUrl1,
    headers: {
        'Authorization': "Bearer 443d92f6c43efff829010abf94a500289c261775bc001f05e1320f14ccb615cadcf1f477727da943bebdc7116d39e29f2ec840a7796fde64f02c906a2c34c80d7e3ca5fe6bfb37ca97242efd3cbdf41e100cf653303b3494d8573547df427d88c9d9fa3897aa0a42a3c9e480d803a3abd8db51080979bc53ccd8c56eecd08b7a",  
    }
});

export default axiosInstance;