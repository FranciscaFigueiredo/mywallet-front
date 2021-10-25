import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";

import { PageContainer } from "../../Styles/ContainerStyle";

import Header from "../Header";
import NewAction from "../NewAction";
import Transactions from "../Transactions";

export default function Home() {
    const user = useContext(UserContext);
    console.log(user)

    const [name, setName] = useState('Olá, Fulano')

    useEffect(() => {
        setName(`Olá, ${user.user}`);
    })

    return (
        <PageContainer page="center">
            <Header name = {name} logout={true}/>
            <Transactions />
            <NewAction />
        </PageContainer>
    )
}