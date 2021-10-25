import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import Loader from "react-loader-spinner";

import { PageContainer } from "../../Styles/ContainerStyle";
import { Button } from "../ButtonStyle";
import Input from "../../Styles/Form/InputStyle";
import TitleForm from "../../Styles/Form/TitleFormStyle";
import { useContext, useEffect, useState } from "react";
import { getUserInfo, postLogin } from "../../services/myWallet";
import UserContext from "../../contexts/UserContext";
import { UserLoginValidation } from "../../userLogin";

export default function Login({setUser, token, setToken}) {
    const history = useHistory();

    const [buttonName, setButtonName] = useState("Entrar");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userData, setUserData] = useState({})

    useEffect(() => {
        setUserData({
            email,
            password
        })
    }, [email, password])
    
    function redirectLogin(res) {
        
        setToken(res.data);
        setUserLog(res);
        
        const user = JSON.stringify(res.data);
        sessionStorage.setItem("user", user);
        
        setTimeout(() => {
            history.push("/home")
        }, 2000)
    }

    function setUserLog(res) {
        getUserInfo(res.data).then((res) => setUser(res.data.name))
    }

    console.log(userData)
    function logInto(event) {
        event.preventDefault();

        setButtonName(<Loader
            type="ThreeDots"
            color="#ffffff"
            height={40}
            width={40}
            timeout={3000} //3 secs
        />)
        postLogin(userData).then(redirectLogin)
    }

    return (
        <PageContainer page="center">
            <TitleForm><h1>MYWallet</h1></TitleForm>
            <form onSubmit={logInto}>
            <Input type="email" placeholder="E-mail" required value={email} onChange={(event) => (setEmail(event.target.value))} />
                <Input type="password" placeholder="Senha" required value={password} onChange={(event) => (setPassword(event.target.value))} />
                <Button type="submit">{buttonName}</Button>
            </form>
            <Link to="/sign-up">
                Primeira vez? Cadastre-se!
            </Link>
        </PageContainer>
    );
}

