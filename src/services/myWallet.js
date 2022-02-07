import axios from "axios";
import { api } from "./apiUrl";

function postSignUp(body) {
    const promise = axios.post(`${api}/sign-up`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${api}/login`, body);
    return promise;
}

function postNewEntry(body, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${api}/new-transition?type=entry`, body, config);
    return promise;
}

function postNewExit(body, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${api}/new-transition?type=exit`, body, config);
    return promise;
}

function postLogout(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${api}/logout`, config);
    return promise;
}

function getWallet(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.get(`${api}/`, config);
    return promise;
}

function getUserInfo(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.get(`${api}/user`, config);
    return promise;
}

function deleteFinancialEvent({ token, id }) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.delete(`${api}/event/${ id }`, config);
    return promise;
}

function updateFinancialEvent({ token, id }) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.put(`${api}/event/${ id }`, config);
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
    deleteFinancialEvent,
    updateFinancialEvent,
}
