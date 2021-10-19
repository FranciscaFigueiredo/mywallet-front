import { Link } from "react-router-dom";

import { PageContainer } from "../../ContainerStyle";
import { Button } from "../ButtonStyle";
import Input from "../Form/InputStyle";
import TitleForm from "../Form/TitleFormStyle";

export default function SignUp() {
    return (
        <PageContainer>
            <TitleForm><h1>MYWallet</h1></TitleForm>
            <form>
                <Input type="text" placeholder="Nome"/>
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" />
                <Input type="password" placeholder="Confirme sua senha" />
                <Button>Cadastrar</Button>
            </form>
            <Link to="/">
                Já tem uma conta? Entre agora!
            </Link>
        </PageContainer>
    );
}