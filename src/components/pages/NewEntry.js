import { useState } from "react";
import { useHistory } from "react-router-dom";

import { PageContainer } from "../../Styles/ContainerStyle";
import Input from "../../Styles/Form/InputStyle";
import { Button } from "../ButtonStyle";

import Loader from "react-loader-spinner";

import Header from "../Header";
import FormNew from "../FormNew"

export default function NewEntry() {
    const history = useHistory();

    const [title, setTitle] = useState('Nova Entrada');
    const [buttonName, setButtonName] = useState("Salvar entrada");

    function entry(event) {
        event.preventDefault();
        setButtonName(<Loader
            type="ThreeDots"
            color="#ffffff"
            height={40}
            width={40}
            timeout={3000} //3 secs
        />)
        setTimeout(() => {
            history.push("/home")
        }, 3000);
    }
    return (
        <PageContainer page="app" >
            <Header name = {title} logout={false}/>
            <FormNew action={entry} buttonName={buttonName} />
        </PageContainer>
    );
}