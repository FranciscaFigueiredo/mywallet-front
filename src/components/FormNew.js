import { useEffect, useState } from "react";

import { postNewEntry, postNewExit, updateFinancialEvent } from "../services/myWallet";

import { UserLoginValidation } from "../userLogin";
import { Button } from "../styles/ButtonStyle";

import Input from "../styles/Form/InputStyle";
import { useHistory } from "react-router-dom";

import Loader from "react-loader-spinner";

export default function FormNew({ action, id, buttonName, setButtonName, setModal, setModalSuccess, setMessage, financialEvent }) {
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
            setMessage('Dica: o valor deve ser numérico e maior que zero');
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

    function entry() {
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

    function editEntry(event) {
        event.preventDefault();
        setButtonName(<Loader
            type="ThreeDots"
            color="#ffffff"
            height={40}
            width={40}
            timeout={2000} //2 secs
        />);

        updateFinancialEvent({
            id,
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
            setButtonName('Atualizar entrada')
            setDisable(false);

            errorResponse(err);
        })
    }

    function exit() {
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

    function editExit() {
        setButtonName(<Loader
            type="ThreeDots"
            color="#ffffff"
            height={40}
            width={40}
            timeout={2000} //2 secs
        />);

        updateFinancialEvent({
            id,
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
            setButtonName('Atualizar saída')
            setDisable(false);

            errorResponse(err);
        })
    }

    // function redirect(event) {
    //     event.preventDefault();
    //     if (action === 'edit-entry') {
    //         console.log('edit-entry')
    //         editEntry();
    //     }

    //     if (buttonName === 'Salvar entrada') {
    //         entry();
    //     }
    //     // if (buttonName === 'Atualizar entrada') {
    //     //     editEntry();
    //     // }

    //     if (buttonName === 'Salvar saída') {
    //         exit();
    //     }
    //     if (buttonName === 'Atualizar saída') {
    //         editExit();
    //     }
    // }

    return (
        <form onSubmit={() => editEntry()}>
            <Input compare={true} type="text" placeholder="Valor" required disabled={disable} value={value} onChange={(event) => (setValue(event.target.value))} />
            <Input compare={true} type="text" placeholder="Descrição" required disabled={disable} value={description} onChange={(event) => (setDescription(event.target.value))} />
            <Button type="submit" disabled={false}>{ buttonName }</Button>
        </form>
    );
}
