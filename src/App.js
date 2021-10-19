import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

import GlobalStyle from "./GlobalStyle";

export default function App() {
    
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/sign-up" exact>
                    <SignUp />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}