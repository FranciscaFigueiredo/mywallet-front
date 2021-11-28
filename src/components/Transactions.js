import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getWallet } from "../services/myWallet";
import { Date, Description, Info, Records, Total, Title, TransactionsContainer, Value } from "../styles/TransactionsStyle";
import { UserLoginValidation } from "../userLogin";

export default function Transactions() {
    const [wallet, setWallet] = useState([]);
    const [total, setTotal] = useState()

    const token = UserLoginValidation();

    useEffect(() => {
        getWallet(token).then((res) => {
            setWallet([...res.data.wallet]);
            setTotal(res.data.total);
        });   
    }, [token]);

    return (
        <Records>
            <TransactionsContainer>
                {
                    wallet.length ?
                        wallet.map((data, index) => (<Wallet key={index} wallet = {data} />))
                        :
                        <Description>Não há registros de entrada ou saída</Description>
                        
                }
            </TransactionsContainer>
            
            <Total>
                <Title>Saldo</Title>
                <Value value={total}>{total}</Value>
            </Total>
            
        </Records>
    );
}

function Wallet({ wallet }) {
    const {
        date,
        description,
        value
    } = wallet;  

    const dateFormat = dayjs(date).format('DD/MM');
    let valueFormat = value;

    if (value < 0) {
        valueFormat = value * -1
    }

    return (
        <Info>
            <Date>{ dateFormat }</Date>
            <Description>{ description }</Description>
            <Value value={value}>{ valueFormat }</Value>
        </Info>
    );
}