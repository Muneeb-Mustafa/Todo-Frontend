import axios from "axios"


const instance = axios.create({
    baseURL:'http://localhost:5000/api'
})

export const post = (url, data)=>instance.post(url, data)


 