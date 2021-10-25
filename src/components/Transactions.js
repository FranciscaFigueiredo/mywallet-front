import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getWallet } from "../services/myWallet";
import { Date, Description, Info, Records, Saldo, Title, Value } from "../Styles/TransactionsStyle";
import { UserLoginValidation } from "../userLogin";

export default function Transactions() {
    const [wallet, setWallet] = useState([]);
    const [saldo, setSaldo] = useState()

    const token = UserLoginValidation();

    useEffect(() => {
        // setWallet([])    

        getWallet(token).then((res) => (setWallet(res.data.walletData),setSaldo(res.data.totalData)));   
    }, []);

    return (
        <Records>
            {
                wallet === [] ?
                    <Description>Não há registros de entrada ou saída</Description>
                    : wallet.map((data, index) => (<Wallet key={index} wallet = {data} />))
            }
            <Saldo>
                <Title>SALDO</Title>
                <Value value={saldo}>{saldo}</Value>
            </Saldo>
            
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