import axios from "axios";
import config from "../config";

console.log(config)

const service = axios.create({
    baseURL:config.default.baseURL,
    timeout:config.default.requestTimeOut,
    headers:{
        'Conteny-Type':'application/json;charset=utf-8'
    },
    withCredentials:false
})

export default service
