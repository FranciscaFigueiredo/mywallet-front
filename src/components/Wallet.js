import dayjs from "dayjs";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { deleteFinancialEvent } from "../services/myWallet";
import ModalError from "../shared/ModalError";
import ModalSuccess from "../shared/ModalSuccess";
import { Date, Delete, Description, Info, Value } from "../styles/TransactionsStyle";

export default function Wallet({ wallet }) {
    const user = useContext(UserContext);
    const history = useHistory();

    const [modal, setModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [message, setMessage] = useState(1);

    const {
        _id,
        date,
        description,
        value,
    } = wallet;  

    const dateFormat = dayjs(date).format('DD/MM');

    let valueFormat = value;
    if (value < 0) {
        valueFormat = value * -1;
    }
    valueFormat = value.toFixed(2).replace('.', ',');

    function removeFinancialEvent(id) {
        deleteFinancialEvent({ token: user.token, id: _id})
            .then((res) => {
                setMessage('');
                setModalSuccess(true);
            })
            .catch((err) => {
                setMessage('Não foi possível deletar, tente novamente mais tarde')
                setModal(true);
            })
            setTimeout(() => {
                history.push('/');
            }, 1000)
    }

    return (
        <Info>
            <Date>{ dateFormat }</Date>
            <Description>{ description }</Description>
            <Value value={value}>{ valueFormat }</Value>
            <Delete onClick={() => removeFinancialEvent(_id)}>x</Delete>

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

        </Info>
    );
}
