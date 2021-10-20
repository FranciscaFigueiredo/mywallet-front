import Input from "../Styles/Form/InputStyle";
import { Button } from "./ButtonStyle";

export default function FormNew({ action, buttonName }) {
    
    return (
        <form onSubmit={action}>
            <Input type="text" placeholder="Valor" />
            <Input type="text" placeholder="Descrição" />
            <Button type="submit">{ buttonName }</Button>
        </form>
    );
}