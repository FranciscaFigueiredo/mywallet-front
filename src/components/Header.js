import { PageTitle } from "../styles/PageTitle";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { postLogout } from "../services/myWallet";
import { UserLoginValidation } from "../userLogin";

export default function Header({ name, logout }) {
    const history = useHistory();
    const token = UserLoginValidation();

    function logoutUser() {
        postLogout(token).catch((err) => console.error())
        sessionStorage.clear()
        window.location.reload()
        history.push('/')
    }

    return (
        <PageTitle>
            <h1>{name}</h1>
            {
                logout ?
                <h1><RiLogoutBoxRLine onClick={() => logoutUser()} /></h1>
                : ""
            }
            
        </PageTitle>
    );
}
