import { PageTitle } from "../Styles/PageTitle";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Header({ name, logout }) {
    function postLogout() {
        sessionStorage.clear()
        window.location.reload()
    }

    return (
        <PageTitle>
            <h1>{name}</h1>
            {
                logout ?
                <Link to='/' >
                    <RiLogoutBoxRLine onClick={postLogout} />
                </Link>
                : ""
            }
            
        </PageTitle>
    );
}