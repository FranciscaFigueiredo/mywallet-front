import { Link } from "react-router-dom";

import { PageContainer } from "../../ContainerStyle";
import { Button } from "../ButtonStyle";
import Input from "../Form/InputStyle";
import TitleForm from "../Form/TitleFormStyle";

export default function Login() {
    return (
        <PageContainer>
            <TitleForm><h1>MYWallet</h1></TitleForm>
            <form>
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" />
                <Button>Entrar</Button>
            </form>
            <Link to="/sign-up">
                Primeira vez? Cadastre-se!
            </Link>
        </PageContainer>
    );
}

