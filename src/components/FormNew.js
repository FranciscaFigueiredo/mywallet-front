import { useEffect, useState } from "react";

import { postNewEntry, postNewExit, postTransition } from "../services/myWallet";

import { UserLoginValidation } from "../userLogin";
import { Button } from "./ButtonStyle";

import Input from "../Styles/Form/InputStyle";
import { useHistory } from "react-router-dom";

export default function FormNew({ action, buttonName }) {
    const token = UserLoginValidation();
    const history = useHistory()

    const [value, setValue] = useState('');
    const [description, setDescription] = useState("")

    useEffect(() => {
    }, [value, description]);

    function entry(event) {
        event.preventDefault();

        postNewEntry({
            value,
            description
        }, token).then(setTimeout(() => {
            history.push("/home")
        }, 2000))
    }

    function exit(event) {
        event.preventDefault();

        postNewExit({
            value,
            description
        }, token).then(setTimeout(() => {
            history.push("/home")
        }, 2000))

        setTimeout(() => {
            history.push("/home")
        }, 2000);
    }

    console.log({value, description})
    return (
        <form onSubmit={action, buttonName === 'Salvar entrada' ? entry : exit}>
            <Input type="text" placeholder="Valor" value={value} onChange={(event) => (setValue(event.target.value.replace(/([0-9]{3}),([0-9]{2}$)/g, `.$1,$2`)))} />
            <Input type="text" placeholder="Descrição" value={description} onChange={(event) => (setDescription(event.target.value))} />
            <Button type="submit">{ buttonName }</Button>
        </form>
    );
}