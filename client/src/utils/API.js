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
    },
    blogCategory: () => {
        return axios.get("/api/categories/")
    },
    newCategory: (name) => {
        return axios.post("/api/categories/", name)
    },
    
}
export default API