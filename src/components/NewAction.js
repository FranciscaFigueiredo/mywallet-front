import { Actions, New } from "../Styles/NewAction";
import { BsPlusCircle } from "react-icons/bs";

export default function NewAction() {
    return (
        <Actions>
            <New>
                <BsPlusCircle />
                <span>Nova entrada</span>
            </New>
            <New>
                <BsPlusCircle />
                <span>Nova saída</span>
            </New>
        </Actions>
    );
}