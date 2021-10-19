import { PageTitle } from "../Styles/PageTitle";
import { RiLogoutBoxRLine } from "react-icons/ri";

export default function Header({ name, logout }) {
    return (
        <PageTitle>
            <h1>Olá, {name}</h1>
            {
                logout ?
                <RiLogoutBoxRLine />
                : ""
            }
            
        </PageTitle>
    );
}