import { useState } from "react";
import { useHistory } from "react-router-dom";

import { PageContainer } from "../../Styles/ContainerStyle";

import Loader from "react-loader-spinner";

import Header from "../Header";
import FormNew from "../FormNew"
import { postNewEntry } from "../../services/myWallet";
import { UserLoginValidation } from "../../userLogin";

export default function NewEntry() {
    const history = useHistory();
    const token = UserLoginValidation();

    const [title, setTitle] = useState('Nova Entrada');
    const [buttonName, setButtonName] = useState("Salvar entrada");

    function entry(event) {
        event.preventDefault();
        setButtonName(<Loader
            type="ThreeDots"
            color="#ffffff"
            height={40}
            width={40}
            timeout={2000} //3 secs
        />);
        
        setTimeout(() => {
            history.push("/home")
        }, 2000);
    }
    return (
        <PageContainer page="app" >
            <Header name = {title} logout={false}/>
            <FormNew action={entry} buttonName={buttonName} />
        </PageContainer>
    );
}