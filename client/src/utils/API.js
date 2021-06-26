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
    },
    submitBlog: (post, info, userId) => {
        const blog = {
            body: post,
            title: info.title,
            description: info.description
        }
        return axios.post(`/api/posts/submit/${userId}`, blog)
    }
    
}
export default API