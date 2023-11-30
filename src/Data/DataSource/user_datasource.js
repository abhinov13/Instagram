import axios from "axios";
const link = 'http://localhost:8080/user';

/**
 * @param {{name,username,mobile,password,email}} user
 */

export function register(user) {
    const call = link + '/create';
    return axios.post(call, user);
}

/**
 * @param {{username,password}} user
 */
export function authenticate(user) {
    const call = link + '/authenticate';
    return axios.post(call, user);
}

/**
 * @param {string} username 
 */
export function validateUsername(username) {
    const call = link + '/validate/username';
    return axios.post(call, username,{ headers: { 'Content-Type': 'text/plain' } });
}
/**
 * @param {string/number} mobileOrEmail 
 */
export function validateMobileOrUsername(mobileOrEmail) {
    const call = link + '/validate/mobileOrEmail';
    return axios.post(call, mobileOrEmail,{ headers: { 'Content-Type': 'text/plain' } });
}