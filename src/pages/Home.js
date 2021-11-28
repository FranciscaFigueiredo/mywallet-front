import { useContext, useEffect, useState } from "react";

import { PageContainer } from "../styles/ContainerStyle";

import Header from "../components/Header";
import NewAction from "../components/NewAction";
import Transactions from "../components/Transactions";
import UserContext from "../contexts/UserContext";

export default function Home() {
    const user = useContext(UserContext);

    const [name, setName] = useState('Olá!')

    useEffect(() => {
        setName(`Olá, ${user.user}!`);
    }, [user])

    return (
        <PageContainer page="center">
            <Header name = {name} logout={true}/>
            <Transactions />
            <NewAction />
        </PageContainer>
    )
}