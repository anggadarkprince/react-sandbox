import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID bjndv5Ts8-PxUhTk4ObAAPf0ft3JW25VH_tzoxny-pk'
    }
})