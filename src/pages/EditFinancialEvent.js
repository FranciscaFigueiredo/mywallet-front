import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PageContainer } from "../styles/ContainerStyle";
import Header from "../components/Header";
import FormNew from "../components/FormNew"
import ModalError from "../shared/ModalError";
import ModalSuccess from "../shared/ModalSuccess";
import { UserLoginValidation } from "../userLogin";
import NewAction from "../components/NewAction";
import { getFinancialEventInfo } from "../services/myWallet";
import UserContext from "../contexts/UserContext";

export default function EditFinancialEvent() {
    UserLoginValidation();
    const user = useContext(UserContext);
    const { id } = useParams()

    const [modal, setModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [message, setMessage] = useState(1);
    const [financialEvent, setFinancialEvent] = useState(null);

    const [buttonName, setButtonName] = useState("Atualizar entrada");
    const [title, setTitle] = useState("Editar entrada");

    useEffect(() => {
        getFinancialEventInfo({ id, token: user.token })
            .then((res) => setFinancialEvent(res.data))
            .catch((err) => console.error);

        if (financialEvent && financialEvent.value < 0) {
            setButtonName("Atualizar saída")
            setTitle("Editar saída")
        }
        
    }, [user, id]);

    return (
        <PageContainer page="app" >
            <Header name={ title } logout={false}/>
            <FormNew action='edit-entry' id={id} buttonName={buttonName} setButtonName={setButtonName} setModal={setModal} setModalSuccess={setModalSuccess} setMessage={setMessage} financialEvent={financialEvent} />

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
            <NewAction />
        </PageContainer>
    );
}
