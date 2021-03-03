import axios from 'axios'


const baseApiURL = "https://www.superheroapi.com/api.php/3759234137445659"

const api = axios.create({
    baseURL: baseApiURL
})

export default api
