import axios from "axios";

const BASE_URL = "http://www.localhost:4000";

function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/`, body);
    return promise;
}

export {
    postSignUp,
    postLogin
}