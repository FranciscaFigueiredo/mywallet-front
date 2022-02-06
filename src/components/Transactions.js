import { useEffect, useState } from "react";
import { getWallet } from "../services/myWallet";
import { Description, Records, Total, Title, TransactionsContainer, Value } from "../styles/TransactionsStyle";
import { UserLoginValidation } from "../userLogin";
import Wallet from "./Wallet";

export default function Transactions() {
    const [wallet, setWallet] = useState([]);
    const [total, setTotal] = useState()

    const token = UserLoginValidation();

    useEffect(() => {
        getWallet(token).then((res) => {
            setWallet([...res.data.wallet]);
            setTotal(res.data.total.toFixed(2).replace('.', ','));
        });   
    }, [token]);
    console.log(wallet);

    // const totalFormated = total.toFixed(2).replace('.', ',');

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
