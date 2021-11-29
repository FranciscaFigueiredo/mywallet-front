import { useState } from "react";
import { useHistory } from "react-router-dom";

import Loader from "react-loader-spinner";
import { PageContainer } from "../styles/ContainerStyle";
import Header from "../components/Header";
import FormNew from "../components/FormNew"
import ModalError from "../shared/ModalError";
import ModalSuccess from "../shared/ModalSuccess";
import { UserLoginValidation } from "../userLogin";

export default function NewExit() {
    UserLoginValidation();
    const history = useHistory();

    const [modal, setModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [message, setMessage] = useState(1);

    const [buttonName, setButtonName] = useState("Salvar saída");

    function exit(event) {
        event.preventDefault();
        setButtonName(<Loader
            type="ThreeDots"
            color="#ffffff"
            height={40}
            width={40}
            timeout={2000} //2 secs
        />)
        setTimeout(() => {
            history.push("/home")
        }, 2000);
    }
    return (
        <PageContainer page="app" >
            <Header name='Nova saída' logout={false}/>
            <FormNew action={exit} buttonName={buttonName} setButtonName={setButtonName} setModal={setModal} setModalSuccess={setModalSuccess} setMessage={setMessage} />

            {
                modal ?
                <ModalError message={message} setModal={setModal} />
                : ''
            }

            {
                modalSuccess ?
                <ModalSuccess message={message} />
                : ''
            }
        </PageContainer>
    );
}
