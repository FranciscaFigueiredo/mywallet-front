import { PageTitle } from "../Styles/PageTitle";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Header({ name, logout }) {
    return (
        <PageTitle>
            <h1>{name}</h1>
            {
                logout ?
                <Link to="/" >
                    <RiLogoutBoxRLine />
                </Link>
                : ""
            }
            
        </PageTitle>
    );
}