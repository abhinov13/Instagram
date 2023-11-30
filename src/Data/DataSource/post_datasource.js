import axios from "axios";
const link = 'http://localhost:8080/posthandler';

export const getPosts = () => {
    const call = link + '/getPosts';
    return axios.get(call);
}
/**
 * @param {{file, username, description}} data 
 */
export const save = (data) => {
    const call = link + '/upload';
    return axios.post(call, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
}