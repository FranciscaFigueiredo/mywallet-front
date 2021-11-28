import { PageTitle } from "../styles/PageTitle";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { postLogout } from "../services/myWallet";
import { UserLoginValidation } from "../userLogin";

export default function Header({ name, logout }) {
    const token = UserLoginValidation();
    console.log({token})
    function logoutUser() {
        postLogout(token).then((res) => {
            sessionStorage.clear()
            window.location.reload()
        }).catch((err) => console.error())
        sessionStorage.clear()
        window.location.reload()
    }

    return (
        <PageTitle>
            <h1>{name}</h1>
            {
                logout ?
                <Link to='/' >
                    <RiLogoutBoxRLine onClick={logoutUser} />
                </Link>
                : ""
            }
            
        </PageTitle>
    );
}