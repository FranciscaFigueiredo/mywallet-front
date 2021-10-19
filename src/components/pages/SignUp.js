import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useState } from "react";

import Loader from "react-loader-spinner";

import { PageContainer } from "../../Styles/ContainerStyle";
import { Button } from "../ButtonStyle";
import Input from "../../Styles/Form/InputStyle";
import TitleForm from "../../Styles/Form/TitleFormStyle";


export default function SignUp() {
    const history = useHistory();

    const [buttonName, setButtonName] = useState("Cadastrar");

    function signup(event) {
        event.preventDefault();
        setButtonName(<Loader
            type="Audio"
            color="#ffffff"
            height={40}
            width={40}
            timeout={3000} //3 secs
        />)
        setTimeout(() => {
            history.push("/")
        }, 3000)
    }
    return (
        <PageContainer>
            <TitleForm><h1>MYWallet</h1></TitleForm>
            <form onSubmit={signup}>
                <Input type="text" placeholder="Nome" required />
                <Input type="email" placeholder="E-mail" required />
                <Input type="password" placeholder="Senha" required />
                <Input type="password" placeholder="Confirme sua senha" required />
                <Button type="submit">{ buttonName }</Button>
            </form>
            <Link to="/">
                Já tem uma conta? Entre agora!
            </Link>
        </PageContainer>
    );
}