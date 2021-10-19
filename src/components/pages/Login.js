import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import Loader from "react-loader-spinner";

import { PageContainer } from "../../Styles/ContainerStyle";
import { Button } from "../ButtonStyle";
import Input from "../../Styles/Form/InputStyle";
import TitleForm from "../../Styles/Form/TitleFormStyle";
import { useState } from "react";

export default function Login() {
    const history = useHistory();

    const [buttonName, setButtonName] = useState("Entrar");

    function logInto(event) {
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
        }, 3000)
    }

    return (
        <PageContainer>
            <TitleForm><h1>MYWallet</h1></TitleForm>
            <form onSubmit={logInto}>
                <Input type="email" placeholder="E-mail" required />
                <Input type="password" placeholder="Senha" required />
                <Button type="submit">{buttonName}</Button>
            </form>
            <Link to="/sign-up">
                Primeira vez? Cadastre-se!
            </Link>
        </PageContainer>
    );
}

