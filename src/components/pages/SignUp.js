import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";

import Loader from "react-loader-spinner";

import { PageContainer } from "../../Styles/ContainerStyle";
import { Button } from "../ButtonStyle";
import Input from "../../Styles/Form/InputStyle";
import TitleForm from "../../Styles/Form/TitleFormStyle";
import { postSignUp } from "../../services/myWallet";


export default function SignUp() {
    const history = useHistory();

    const [buttonName, setButtonName] = useState("Cadastrar");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [userData, setUserData] = useState({})

    useEffect(() => {
        setUserData({
            name,
            email,
            password,
            confirmPassword
        })
    }, [name, email, password, confirmPassword])
    
    function signup(event) {
        event.preventDefault();
        setButtonName(<Loader
            type="ThreeDots"
            color="#ffffff"
            height={40}
            width={40}
            timeout={2000} //2 secs
        />)

        if(password === confirmPassword) {
            postSignUp(userData).then(setTimeout(() => {
                history.push("/")
            }, 2000))
        } else {
            alert("Senhas diferentes")
        }
    }

    return (
        <PageContainer page="center" >
            <TitleForm><h1>MYWallet</h1></TitleForm>
            <form onSubmit={signup}>
                <Input type="text" placeholder="Nome" required value={name} onChange={(event) => (setName(event.target.value))} />
                <Input type="email" placeholder="E-mail" required value={email} onChange={(event) => (setEmail(event.target.value))} />
                <Input type="password" placeholder="Senha" required value={password} onChange={(event) => (setPassword(event.target.value))} />
                <Input type="password" placeholder="Confirme sua senha" required value={confirmPassword} onChange={(event) => (setConfirmPassword(event.target.value))} />
                <Button type="submit">{ buttonName }</Button>
            </form>
            <Link to="/">
                Já tem uma conta? Entre agora!
            </Link>
        </PageContainer>
    );
}