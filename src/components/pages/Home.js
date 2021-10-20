import { useState } from "react";

import { PageContainer } from "../../Styles/ContainerStyle";

import Header from "../Header";
import NewAction from "../NewAction";
import Transactions from "../Transactions";

export default function Home() {
    const [name, setName] = useState('Olá, Fulano')
    return (
        <PageContainer page="center">
            <Header name = {name} logout={true}/>
            <Transactions />
            <NewAction />
        </PageContainer>
    )
}