import { useHistory } from "react-router";

function UserLoginValidation() {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const history = useHistory();

    if (user === null) {
        history.push("/")
    }
    
    return user;
}

export {
    UserLoginValidation
}