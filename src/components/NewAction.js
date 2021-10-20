import { Actions, New } from "../Styles/NewActionStyle";
import { BsPlusCircle } from "react-icons/bs";
import { CgRemove } from 'react-icons/cg'
import { Link } from "react-router-dom";

export default function NewAction() {
    return (
        <Actions>
            <Link to="/new-entry" >
                <New type="in">
                    <BsPlusCircle />
                    <span>Nova entrada</span>
                </New>
            </Link>
            <Link to="/new-exit" >
                <New type="out">
                    <CgRemove />
                    <span>Nova saída</span>
                </New>
            </Link>
        </Actions>
    );
}