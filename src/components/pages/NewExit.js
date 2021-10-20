import { useState } from "react";
import { useHistory } from "react-router-dom";

import Loader from "react-loader-spinner";
import { PageContainer } from "../../Styles/ContainerStyle";
import Header from "../Header";
import FormNew from "../FormNew";

export default function NewExit() {
    const history = useHistory();

    const [title, setTitle] = useState('Nova saída');
    const [buttonName, setButtonName] = useState("Salvar saída");

    function exit(event) {
        event.preventDefault();
        setButtonName(<Loader
            type="ThreeDots"
            color="#ffffff"
            height={40}
            width={40}
            timeout={2000} //3 secs
        />)
        setTimeout(() => {
            history.push("/home")
        }, 2000);
    }
    return (
        <PageContainer page="app" >
            <Header name = {title} logout={false}/>
            <FormNew action={exit} buttonName={buttonName} />
        </PageContainer>
    );
}