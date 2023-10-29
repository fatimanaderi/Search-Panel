import axios from "axios";
export default axios.create({
    baseURL:"https://urlscan.io/api/v1",
    headers:{
        "Access-Control-Allow-Origin":"*"
    }
})