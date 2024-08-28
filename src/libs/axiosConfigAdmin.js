import axios from "axios"

export const baseUrl1 ='https://urbanwrk.com/cms'


const axiosInstance = axios.create({
    baseURL: baseUrl1,
    headers: {
        'Authorization': `Bearer 905a475459648dea63a4f8bc346fbc2108ebc9da796015a008a536d0a10e10f94e620872a98146fcbbed8aa91cfb3c62b2c32dfcb839e5d6c752bab405d40f3163fffea2db2acbb713d517fda697bb152a01384c61b77f65cea9eb9dffdc7f75c90df7811f289d8499c8b7bd4dd7554ce95a4d1df92ba47638b5436dbc51a250`,  
    }
});

export default axiosInstance;