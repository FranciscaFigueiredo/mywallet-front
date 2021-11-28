import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import Loader from "react-loader-spinner";

import { PageContainer } from "../styles/ContainerStyle";
import { Button } from "../styles/ButtonStyle";
import Input from "../styles/Form/InputStyle";
import TitleForm from "../styles/Form/TitleFormStyle";
import { useEffect, useState } from "react";
import { getUserInfo, postLogin } from "../services/myWallet";
import ModalError from "../shared/ModalError";
import ModalSuccess from "../shared/ModalSuccess";

export default function Login({ setUser, token, setToken }) {
    const history = useHistory();

    const [modal, setModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [message, setMessage] = useState(1);

    const [buttonName, setButtonName] = useState("Entrar");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData({
            email,
            password,
        });
    }, [email, password]);

    function redirectLogin(res) {
        setToken(res.data);
        setUserLog(res);

        const user = JSON.stringify(res.data);
        sessionStorage.setItem("user", user);

        setTimeout(() => {
            history.push("/home");
        }, 2000);
    }

    function setUserLog(res) {
        getUserInfo(res.data).then((res) => {
            setUser(res.data.name);
            const name = JSON.stringify(res.data.name);
            sessionStorage.setItem("name", name);
        });
    }

    function logInto(event) {
        event.preventDefault();

        setButtonName(
            <Loader
                type="ThreeDots"
                color="#ffffff"
                height={40}
                width={40}
                timeout={3000} //3 secs
            />
        );
        postLogin(userData)
            .then((res) => {
                setMessage('');
                setModalSuccess(true);
                redirectLogin(res);
            })
            .catch((err) => {
                console.error();
                setButtonName("Entrar")
                if(err.response.status === 400) {
                    setPassword('');
                    setMessage('Dica: A senha deve ter mais que 6 dígitos');
                    setModal(true);
                }

                if(err.response.status === 401) {
                    setEmail('');
                    setPassword('');
                    setMessage('Email ou senha inválidos');
                    setModal(true);
                }
        
                if (err.response.status === 500) {
                    setEmail('');
                    setPassword('');
                    setMessage("Servidor fora de área, tente novamente mais tarde");
                    
                    setModal(true);
                    setTimeout(() => {
                        sessionStorage.clear()
                    }, 2000)
                }
            });
    }

    return (
        <PageContainer page="center">
            <TitleForm>
                <h1>MYWallet</h1>
            </TitleForm>
            <form onSubmit={logInto}>
                <Input
                    compare={true}
                    type="email"
                    placeholder="E-mail"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    compare={true}
                    type="password"
                    placeholder="Senha"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Button type="submit">{buttonName}</Button>
            </form>
            <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>

            {
                modal ?
                <ModalError message={message} setModal={setModal} />
                : ''
            }

            {
                modalSuccess ?
                <ModalSuccess message={message} />
                : ''
            }
        </PageContainer>
    );
}
