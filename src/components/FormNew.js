import { useEffect, useState } from "react";

import { postNewEntry, postNewExit } from "../services/myWallet";

import { UserLoginValidation } from "../userLogin";
import { Button } from "../styles/ButtonStyle";

import Input from "../styles/Form/InputStyle";
import { useHistory } from "react-router-dom";

import Loader from "react-loader-spinner";

export default function FormNew({ buttonName, setButtonName, setModal, setModalSuccess, setMessage }) {
    const token = UserLoginValidation();
    const history = useHistory()

    const [value, setValue] = useState('');
    const [description, setDescription] = useState("")
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        setValue(value.replace(',', '.'))
    }, [value, description]);

    function errorResponse(err) {
        if(err.response.status === 400) {
            setValue('');
            setDescription('');
            setMessage('Dica: o valor deve ser numérico');
            setModal(true);
        }

        if (err.response.status === 500) {
            setMessage("Servidor fora de área, tente novamente mais tarde");
            setModal(true);
            setTimeout(() => {
                sessionStorage.clear()
                window.location.reload()
                history.push('/')
            }, 2000)
        }
    }

    function entry(event) {
        event.preventDefault();

        setButtonName(<Loader
            type="ThreeDots"
            color="#ffffff"
            height={40}
            width={40}
            timeout={2000} //2 secs
        />);

        postNewEntry({
            value,
            description
        }, token)
        .then((res) => {
            setMessage('');
            setModalSuccess(true);
            setTimeout(() => {
                history.push("/home")
            }, 1000)
        })
        .catch((err) => {
            console.error();
            setButtonName('Salvar entrada')
            setDisable(false);

            errorResponse(err);
        })
    }

    function exit(event) {
        event.preventDefault();

        postNewExit({
            value,
            description
        }, token)
        .then((res) => {
            setMessage('');
            setModalSuccess(true);
            setTimeout(() => {
                history.push("/home")
            }, 1000)
        })
        .catch((err) => {
            console.error();
            setButtonName('Salvar saída')
            setDisable(false);

            errorResponse(err);
        })
    }

    return (
        <form onSubmit={buttonName === 'Salvar entrada' ? entry : exit}>
            <Input compare={true} type="text" placeholder="Valor" required disabled={disable} value={value} onChange={(event) => (setValue(event.target.value.replace(/([0-9]{3}),([0-9]{2}$)/g, `.$1,$2`)))} />
            <Input compare={true} type="text" placeholder="Descrição" required disabled={disable} value={description} onChange={(event) => (setDescription(event.target.value))} />
            <Button type="submit" disabled={false}>{ buttonName }</Button>
        </form>
    );
}