import axios from "axios"
const link = 'http://localhost:8080/';

export const check = (username) => {
    const call = link + 'checkNotifications';
    return axios.post(call, username, { headers: { "Content-Type": "text/plain" } });
}