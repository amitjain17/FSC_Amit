import axios from "axios";

const url = 'http://localhost:8083/';


export const validate = (data) => axios.post(url, data).then(console.log(data));

// export const fetchPosts = () => axios.get(url);

// export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost)
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);