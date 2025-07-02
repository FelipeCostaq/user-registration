import axios from "axios";

const api = axios.create({
    baseURL: "https://api-user-registration.onrender.com/"
})

export default api