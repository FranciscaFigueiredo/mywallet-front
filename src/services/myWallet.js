import axios from "axios";

const BASE_URL = "http://www.localhost:4000";

function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/login`, body);
    return promise;
}

function postNewEntry(body, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/new-transition?type=entry`, body, config);
    return promise;
}

function postNewExit(body, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/new-transition?type=exit`, body, config);
    return promise;
}

function postLogout(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/logout`, config);
    return promise;
}

function getWallet(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.get(`${BASE_URL}/`, config);
    return promise;
}

function getUserInfo(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.get(`${BASE_URL}/user`, config);
    return promise;
}

export {
    postSignUp,
    postLogin,
    getWallet,
    postLogout,
    postNewEntry,
    getUserInfo,
    postNewExit,
}
