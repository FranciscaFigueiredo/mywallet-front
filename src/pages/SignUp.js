import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";

import Loader from "react-loader-spinner";

import { PageContainer } from "../styles/ContainerStyle";
import { Button } from "../styles/ButtonStyle";
import Input from "../styles/Form/InputStyle";
import TitleForm from "../styles/Form/TitleFormStyle";
import { postSignUp } from "../services/myWallet";

import ModalSuccess from "../shared/ModalSuccess"
import ModalError from "../shared/ModalError"

export default function SignUp() {
    const history = useHistory();

    const [compare, setCompare] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [message, setMessage] = useState(1);

    const [buttonName, setButtonName] = useState("Cadastrar");
    const [disable, setDisable] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [userData, setUserData] = useState({})

    useEffect(() => {
        if (password !== confirmPassword) {
            setCompare(false);
        } else {
            setCompare(true);
        }

        setUserData({
            name,
            email,
            password,
            confirmPassword
        })
    }, [name, email, password, confirmPassword])
    
    function signup(event) {
        event.preventDefault();
        setDisable(true);
        
        setButtonName(<Loader
            type="ThreeDots"
            color="#ffffff"
            height={40}
            width={40}
            timeout={2000} //2 secs
        />)

        if(password === confirmPassword) {
            postSignUp(userData).then((res) => {
                setMessage('Cadastro realizado com sucesso!');
                setModalSuccess(true);
                setTimeout(() => {
                    history.push('/')
                }, 2000)
            }).catch((err) => {
                console.error();
                setButtonName('Cadastrar')
                setPassword('');
                setConfirmPassword('');
                setDisable(false);

                if(err.response.status === 400) {
                    setMessage('Digite dados válidos');
                    setModal(true);
                }

                if(err.response.status === 409) {
                    setEmail("");
                    setMessage('Email já cadastrado');
                    setModal(true);
                }

                if (err.response.status === 500) {
                    setMessage("Servidor fora de área, tente novamente mais tarde");
                    setButtonName("Cadastrar");
                    setModal(true);
                    setTimeout(() => {
                        history.push('/')
                    }, 2000)
                }
            })    
        } else {
            setPassword("");
            setConfirmPassword("");
            setMessage("Senhas diferentes, confirme novamente");
            setModal(true);
            setButtonName("Cadastrar");
            setDisable(false);
        }
    }

    return (
        <PageContainer page="center" >
            <TitleForm><h1>MYWallet</h1></TitleForm>
            <form onSubmit={signup}>
                <Input 
                    autocomplete="false"
                    compare={true}
                    type="text"
                    placeholder="Nome"
                    disabled={disable}
                    required
                    value={name}
                    onChange={(event) => (setName(event.target.value))}
                />
                <Input
                    compare={true}
                    type="email"
                    placeholder="E-mail"
                    disabled={disable}
                    required
                    value={email}
                    onChange={(event) => (setEmail(event.target.value))}
                />
                <Input
                    compare={compare}
                    type="password" 
                    placeholder="Senha" 
                    disabled={disable} 
                    required 
                    value={password} 
                    onChange={(event) => (setPassword(event.target.value))}
                />
                <Input 
                    compare={compare} 
                    type="password"
                    placeholder="Confirme sua senha"
                    disabled={disable}
                    required
                    value={confirmPassword}
                    onChange={(event) => (setConfirmPassword(event.target.value))}
                />
                <Button type="submit">{ buttonName }</Button>
            </form>
            <Link to="/">
                Já tem uma conta? Entre agora!
            </Link>

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
