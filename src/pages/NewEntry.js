import { useState } from "react";

import { PageContainer } from "../styles/ContainerStyle";

import Header from "../components/Header";
import FormNew from "../components/FormNew"
import ModalError from "../shared/ModalError";
import ModalSuccess from "../shared/ModalSuccess";
import { UserLoginValidation } from "../userLogin";

export default function NewEntry() {
    UserLoginValidation();
    const [modal, setModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [message, setMessage] = useState(1);

    const [buttonName, setButtonName] = useState("Salvar entrada");

    return (
        <PageContainer page="app" >
            <Header name='Nova Entrada' logout={false}/>
            <FormNew buttonName={buttonName} setButtonName={setButtonName} setModal={setModal} setModalSuccess={setModalSuccess} setMessage={setMessage} />

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