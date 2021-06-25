import axios from "axios";

const API = {
    registerUser: input => {
        return axios.post("/api/users/register", input)
    },
    signinUser: input => {
        return axios.post("/api/users/signin", input)
    },
    getPostsByUser: userId => {
        return axios.get(`/api/posts/user/${userId}`)
    }
    
}
export default API