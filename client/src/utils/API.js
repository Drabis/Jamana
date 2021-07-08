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
    submitBlog: (post, info, category, userId, Date) => {
        const blog = {
            body: post,
            title: info.title,
            category: category,
            author: info.author,
            description: info.description,
            
        }
        return axios.post(`/api/posts/submit/${userId}`, blog)
    },
    updateBlog: (post, info, postId) => {
        const blog = {
            body: post,
            title: info.title,
            author: info.author,
            description: info.description
        }
        return axios.put(`/api/posts/submit/${postId}`, blog)
    },
    blogCategory: () => {
        return axios.get("/api/categories/")
    },
    newCategory: (name) => {
        return axios.post("/api/categories/", name)
    },
    getPostById: (id) => {
        return axios.get("/api/posts/" + id)
    }
    
}
export default API